"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { useFullpage } from "./useFullpage";
import { FullpageContext } from "./FullpageContext";
import { FullpageProgress } from "./FullpageProgress";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui/AnimatedBackground";

/* ---------------- CONFIG ---------------- */

const SWIPE_THRESHOLD = 80;
const WHEEL_THRESHOLD = 35;
const WHEEL_COOLDOWN_MS = 700;

/* ---------------- HELPERS ---------------- */

function getScrollableParent(
  target: EventTarget | null
): HTMLElement | null {
  let el = target as HTMLElement | null;
  while (el) {
    if (el instanceof HTMLElement && el.hasAttribute("data-scrollable")) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

function canScroll(el: HTMLElement, deltaY: number) {
  const { scrollTop, scrollHeight, clientHeight } = el;

  if (scrollHeight <= clientHeight) return false;

  // scroll down
  if (deltaY > 0) {
    return scrollTop + clientHeight < scrollHeight - 1;
  }

  // scroll up
  if (deltaY < 0) {
    return scrollTop > 0;
  }

  return false;
}

/* ---------------- COMPONENT ---------------- */

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  const [lockScroll, setLockScroll] = useState(false);
  const lastWheelTs = useRef(0);
  const max = sections.length - 1;

  /* ---------- DESKTOP WHEEL ---------- */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      // 1) Если wheel над scrollable-контейнером и он может скроллить — отдаём ему
      const scrollable = getScrollableParent(e.target);
      if (scrollable && canScroll(scrollable, e.deltaY)) {
        return;
      }

      // 2) Fullpage может быть залочен (mobile / drag)
      if (lockScroll) return;

      // 3) Threshold
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      // 4) Cooldown
      const now = Date.now();
      if (now - lastWheelTs.current < WHEEL_COOLDOWN_MS) return;
      lastWheelTs.current = now;

      // 5) Перелистываем fullpage
      e.preventDefault();

      if (e.deltaY > 0 && index < max) setIndex(index + 1);
      if (e.deltaY < 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, max, lockScroll, setIndex]);

  /* ---------- RENDER ---------- */

  return (
    <FullpageContext.Provider
      value={{
        index,
        progress,
        projectsProgress,
        setIndex,
        lockScroll,
        setLockScroll,
      }}
    >
      <AnimatedBackground />

      <div className="w-full h-screen overflow-hidden relative z-10">
        <FullpageProgress />
        <LanguageSwitcher />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (lockScroll) return;

              if (info.offset.y < -SWIPE_THRESHOLD && index < max) {
                setIndex(index + 1);
              }

              if (info.offset.y > SWIPE_THRESHOLD && index > 0) {
                setIndex(index - 1);
              }
            }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="h-full w-full">{sections[index]}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </FullpageContext.Provider>
  );
}
