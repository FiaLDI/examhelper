"use client";

import { timelineData } from "@/pages-data/timeline";
import { TimelineItem as TimelineItemComponent } from "./TimelineItem";
import { useRef, useState } from "react";
import { useLanguage } from "@/features/language-switcher/model/useLanguage";

export const TimeLine = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const { current: lang } = useLanguage();

  const data = timelineData[lang];
  const total = data.length;

  const progressPercent =
    activeId !== null ? ((activeId - 1) / (total - 1)) * 100 : 0;

  return (
    <section
      ref={containerRef}
      data-scrollable
      className="h-screen no-scrollbar overflow-y-auto max-w-7xl mx-auto w-full p-5 pt-10 relative"
    >
      <h2 className="text-3xl font-bold border-b-2 border-neutral-700/70 text-white w-full p-5">
        {lang === "en" ? "Timeline" : "Хронология"}
      </h2>

      <div className="relative mt-16">
        {/* CENTRAL LINE */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
          <div className="absolute top-0 bottom-0 w-px bg-neutral-700/40" />
          <div
            className="absolute top-0 w-px bg-indigo-500"
            style={{ height: `${progressPercent}%` }}
          />
        </div>

        {/* CONTENT */}
        <ol className="relative space-y-24">
          {data.map((item) => (
            <TimelineItemComponent
              key={item.id}
              {...item}
              activeId={activeId}
              onActive={setActiveId}
            />
          ))}
        </ol>
      </div>
    </section>
  );
};
