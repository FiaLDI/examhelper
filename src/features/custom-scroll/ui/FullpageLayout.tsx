"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import { FullPageStaticConfig, useFullpage } from "../model";
import { FullpageContext } from "../model";
import { FullpageProgress } from "./FullpageProgress";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui";
import { canScroll, getScrollableParent } from "@/shared/utils/scroll";
import { isIOS, isMobile } from "@/shared/lib";

/* ---------------- HELPERS ---------------- */

function canExitScrollable(el: HTMLElement, deltaY: number) {
  const atTop = el.scrollTop <= 0;
  const atBottom =
    el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

  if (deltaY > 0 && atBottom) return true; // вниз
  if (deltaY < 0 && atTop) return true;   // вверх

  return false;
}

/* ---------------- COMPONENT ---------------- */

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  const max = sections.length - 1;

  const lastWheelTs = useRef(0);
  const touchStartY = useRef(0);

  const useNativeScroll = isIOS || isMobile;

  /* ============================================================
     =============== MOBILE / iOS TOUCH HANDLER =================
     ============================================================ */

  useEffect(() => {
    if (!useNativeScroll) return;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - endY;

      if (
        Math.abs(deltaY) <
        FullPageStaticConfig.SWIPE_THRESHOLD
      )
        return;

      const target = e.target as HTMLElement;
      const scrollable = getScrollableParent(target);

      // если внутри scrollable и он ещё может скроллить — НЕ листаем секцию
      if (scrollable && !canExitScrollable(scrollable, deltaY)) {
        return;
      }

      if (deltaY > 0 && index < max) {
        setIndex(index + 1);
      }

      if (deltaY < 0 && index > 0) {
        setIndex(index - 1);
      }
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [useNativeScroll, index, max, setIndex]);

  /* ============================================================
     ===================== DESKTOP WHEEL ========================
     ============================================================ */

  useEffect(() => {
    if (useNativeScroll) return;

    const onWheel = (e: WheelEvent) => {
      const scrollable = getScrollableParent(e.target);

      if (scrollable && canScroll(scrollable, e.deltaY)) {
        e.stopPropagation();
        return;
      }

      if (
        Math.abs(e.deltaY) <
        FullPageStaticConfig.WHEEL_THRESHOLD
      )
        return;

      const now = Date.now();
      if (
        now - lastWheelTs.current <
        FullPageStaticConfig.WHEEL_COOLDOWN_MS
      )
        return;

      lastWheelTs.current = now;
      e.preventDefault();

      if (e.deltaY > 0 && index < max) setIndex(index + 1);
      if (e.deltaY < 0 && index > 0) setIndex(index - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [useNativeScroll, index, max, setIndex]);

  /* ============================================================
     ===================== RENDER ===============================
     ============================================================ */

  return (
    <FullpageContext.Provider
      value={{ index, setIndex, progress, projectsProgress }}
    >
      <AnimatedBackground
        index={index}
        progress={progress}
        projectsProgress={projectsProgress}
      />

      {/* ---------- MOBILE / iOS ---------- */}
      {useNativeScroll ? (
        <>
          <div className="fixed inset-0 z-10 pointer-events-none">
            <FullpageProgress />
            <LanguageSwitcher />
          </div>

          <div
            className="h-screen overflow-y-scroll snap-y snap-mandatory"
            onScroll={(e) => {
              const el = e.currentTarget;
              const nextIndex = Math.round(
                el.scrollTop / el.clientHeight
              );

              if (nextIndex !== index) {
                setIndex(
                  Math.min(max, Math.max(0, nextIndex))
                );
              }
            }}
          >
            {sections.map((section, i) => (
              <section key={i} className="h-screen snap-start">
                {section}
              </section>
            ))}
          </div>
        </>
      ) : (
        /* ---------- DESKTOP ---------- */
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
                if (
                  info.offset.y <
                    -FullPageStaticConfig.SWIPE_THRESHOLD &&
                  index < max
                ) {
                  setIndex(index + 1);
                }

                if (
                  info.offset.y >
                    FullPageStaticConfig.SWIPE_THRESHOLD &&
                  index > 0
                ) {
                  setIndex(index - 1);
                }
              }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className="h-full w-full">
                {sections[index]}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </FullpageContext.Provider>
  );
}
