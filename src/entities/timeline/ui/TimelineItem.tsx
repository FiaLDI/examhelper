"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function TimelineItem({
  id,
  title,
  subtitle,
  description,
  activeId,
  onActive,
}: {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  activeId: number | null;
  onActive: (id: number) => void;
}) {
  const ref = useRef<HTMLLIElement>(null);

  const isInView = useInView(ref, {
    margin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (isInView) onActive(id);
  }, [isInView, id, onActive]);

  const isCompleted = activeId !== null && id <= activeId;
  const isActive = id === activeId;
  const isLeft = id % 2 === 0;

  return (
    <motion.li ref={ref} className="relative flex justify-center">
      <motion.span
        className="absolute top-6 h-4 w-4 rounded-full"
        animate={{
          backgroundColor: isCompleted ? "#6366f1" : "#525252",
          boxShadow: isActive
            ? "0 0 0 6px rgba(129,140,248,0.4)"
            : isCompleted
            ? "0 0 0 4px rgba(129,140,248,0.25)"
            : "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: isCompleted ? 1 : 0.35,
          scale: isActive ? 1 : 0.96,
        }}
        transition={{ duration: 0.4 }}
        className={`relative max-w-md rounded-xl border p-5 ${
          isLeft ? "mr-auto ml-16" : "ml-auto mr-16"
        } ${
          isCompleted
            ? "border-indigo-400/40 bg-neutral-900/70"
            : "border-neutral-700 bg-neutral-900/40"
        }`}
      >
        {isActive && (
          <div className="absolute -inset-6 rounded-2xl bg-indigo-500/10 blur-xl -z-10" />
        )}

        <div className="text-xs uppercase tracking-wide text-neutral-400 mb-1">
          Этап {id}
        </div>

        <h3 className="text-lg font-semibold text-neutral-100">
          {title}
        </h3>

        {subtitle && (
          <p className="text-sm text-neutral-300 mt-1">
            {subtitle}
          </p>
        )}

        {description && (
          <p className="text-sm text-neutral-400 mt-2">
            {description}
          </p>
        )}
      </motion.div>
    </motion.li>
  );
}
