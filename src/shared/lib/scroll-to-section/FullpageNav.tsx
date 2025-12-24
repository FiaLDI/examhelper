"use client";

import { motion } from "framer-motion";

export function FullpageNav({
  count,
  active,
  onSelect,
}: {
  count: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active;

        return (
          <motion.button
            key={i}
            onClick={() => onSelect(i)}
            className="w-3 h-3 rounded-full"
            animate={{
              scale: isActive ? 1.4 : 1,
              backgroundColor: isActive ? "#6366f1" : "#555",
            }}
            transition={{ duration: 0.25 }}
          />
        );
      })}
    </div>
  );
}
