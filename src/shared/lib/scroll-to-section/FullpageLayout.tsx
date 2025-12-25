"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFullpage } from "./useFullpage";
import { FullpageContext } from "./FullpageContext";
import { FullpageNav } from "./FullpageNav";
import { FullpageProgress } from "./FullpageProgress";
import { ReactNode } from "react";
import { LanguageSwitcher } from "@/features/language-switcher/ui/LanguageSwitcher";
import { AnimatedBackground } from "@/features/animated-background/ui/AnimatedBackground";

export function FullpageLayout({ sections }: { sections: ReactNode[] }) {
  const { index, setIndex, progress, projectsProgress } = useFullpage({
    sectionCount: sections.length,
  });

  return (
    <FullpageContext.Provider value={{ index, progress, projectsProgress, setIndex }}>
      <AnimatedBackground />

      <div className="w-full h-screen overflow-hidden relative z-10">
        <FullpageNav
          count={sections.length}
          active={index}
          onSelect={(i) => setIndex(i)}
        />

        <FullpageProgress />

        <LanguageSwitcher />

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className="h-full w-full"
              data-fullpage-section={index}
            >
              {sections[index]}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </FullpageContext.Provider>
  );
}
