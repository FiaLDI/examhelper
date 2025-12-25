"use client";

import { motion, useTransform } from "framer-motion";
import { useContext } from "react";
import { FullpageContext } from "@/shared/lib/scroll-to-section/FullpageContext";

const THEMES = [
  { base: "#020617", accent: "rgba(99,102,241,0.35)" },
  { base: "#020617", accent: "rgba(168,85,247,0.35)" },
  { base: "#020617", accent: "rgba(14,165,233,0.35)" },
  { base: "#020617", accent: "rgba(236,72,153,0.35)" },
  { base: "#020617", accent: "rgba(34,197,94,0.35)" },
];



export function AnimatedBackground() {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { index, progress } = ctx;
  const theme = THEMES[index % THEMES.length];

  const scale = useTransform(progress, [0, 1], [1, 1.2]);
  const opacity = useTransform(progress, [0, 1], [0.25, 0.45]);

  const projectsGlow = useTransform(
    ctx.projectsProgress,
    [0, 1],
    [0.25, 0.6]
  );

  const projectsScale = useTransform(
    ctx.projectsProgress,
    [0, 1],
    [1, 1.35]
  );

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      animate={{ backgroundColor: theme.base }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* LIGHT SWEEP */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: `
            radial-gradient(
              800px at ${50 + index * 5}% ${30 + index * 8}%,
              ${theme.accent},
              transparent 60%
            )
          `,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* BLOB 1 */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-[120px]"
        style={{
          background: theme.accent,
          scale,
          opacity,
        }}
        animate={{
          x: index * 60 - 200,
          y: index * 40 - 200,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* BLOB 2 */}
      <motion.div
        className="absolute right-[-300px] bottom-[-300px] w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ background: theme.accent }}
        animate={{
          x: -index * 50,
          y: -index * 30,
        }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      <motion.div
      className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
      style={{
        background: theme.accent,
        opacity: projectsGlow,
        scale: projectsScale,
      }}
      animate={{
        x: index * 60 - 200,
        y: index * 40 - 200,
      }}
    />


      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" />

      {/* VIGNETTE */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40" />
    </motion.div>
  );
}
