"use client";

import { useContext } from "react";
import { FullpageContext } from "./FullpageContext";

const SECTIONS = ["Home", "Skills", "Projects", "Timeline", "Contact"];

export function FullpageProgress() {
  const ctx = useContext(FullpageContext);
  if (!ctx) return null;

  const { index, setIndex } = ctx;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-20
                    flex gap-4 bg-black/40 backdrop-blur-md
                    rounded-xl px-4 py-2">
      {SECTIONS.map((label, i) => (
        <button
          key={label}
          onClick={() => setIndex(i)}
          className={`text-sm transition-colors ${
            index === i
              ? "text-indigo-400"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
