"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { useFullpage } from "../lib";
import { FullpageContext } from "../lib";
import { FullpageProgress } from "./FullpageProgress";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { Component as AnimatedBackground } from "@/features/animated-background/ui";
import { canScroll, getScrollableParent } from "@/shared/utils/scroll";

/* ---------------- CONFIG ---------------- */

const SWIPE_THRESHOLD = 80;
const WHEEL_THRESHOLD = 35;
const WHEEL_COOLDOWN_MS = 700;

/* ---------------- COMPONENT ---------------- */

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  const lastWheelTs = useRef(0);
  const max = sections.length - 1;

  /* ---------- DESKTOP WHEEL ---------- */
  useEffect(() => {
    if (isMobile) return;

    const onWheel = (e: WheelEvent) => {
      const scrollable = getScrollableParent(e.target);

      // если внутри scrollable и он может скроллить — даём ему скроллить
      if (scrollable && canScroll(scrollable, e.deltaY)) {
        e.stopPropagation();
        return;
      }

      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      const now = Date.now();
      if (now - lastWheelTs.current < WHEEL_COOLDOWN_MS) return;
      lastWheelTs.current = now;

      e.preventDefault();

      if (e.deltaY > 0 && index < max) setIndex(index + 1);
      if (e.deltaY < 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [index, max, setIndex, isMobile]);

  /* ---------- MOBILE SWIPE ---------- */
  useEffect(() => {
    if (!isMobile) return;

    let startY = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const delta = endY - startY;

      if (Math.abs(delta) < SWIPE_THRESHOLD) return;

      const scrollable = getScrollableParent(e.target);

      // если внутри scrollable и он может скроллить — не листаем секцию
      if (scrollable && canScroll(scrollable, delta < 0 ? 1 : -1)) {
        return;
      }

      if (delta < 0 && index < max) setIndex(index + 1);
      if (delta > 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [index, max, setIndex, isMobile]);

  /* ---------- RENDER ---------- */

  return (
    <FullpageContext.Provider
      value={{
        index,
        setIndex,
        progress,
        projectsProgress,
      }}
    >
      <AnimatedBackground
        index={index}
        progress={progress}
        projectsProgress={projectsProgress}
      />

      <div className="w-full h-screen overflow-hidden relative z-10">
        <FullpageProgress />
        <LanguageSwitcher />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0 touch-pan-y lg:touch-none"
            drag={"y"}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, info) => {
              if (isMobile) return;

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
