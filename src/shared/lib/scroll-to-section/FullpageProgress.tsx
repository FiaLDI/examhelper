"use client";

import { motion, useTransform } from "framer-motion";
import { useContext } from "react";
import { FullpageContext } from "./FullpageContext";

export function FullpageProgress() {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { progress } = ctx;

  const height = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-3 top-1/2 -translate-y-1/2 h-96 w-1 bg-neutral-700/40 rounded-full overflow-hidden z-50">
      <motion.div
        className="bg-indigo-500 w-full rounded-full origin-bottom"
        style={{ height }}
      />
    </div>
  );
}
