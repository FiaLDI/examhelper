"use client";

import { useRef, useState } from "react";
import {
  TimelineDict,
  TimelineItem as TimelineItemComponent,
} from "@/entities/timeline";
import { useMounted } from "@/shared/utils/useMounted";
import { useDict } from "@/shared/utils/useDict";
import { useSlowScroll } from "@/shared/hooks/scroll";

type TimeLineProps = {
  timelineDict: TimelineDict;
};

export const TimeLine = ({ timelineDict }: TimeLineProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const mounted = useMounted();

  const clientDict = useDict("timeline");
  const data: TimelineDict = mounted ? clientDict : timelineDict;

  const total = data.items.length;

  const progressPercent =
    activeId !== null && total > 1
      ? ((activeId - 1) / (total - 1)) * 100
      : 0;

  /* ---------- SLOW SCROLL ---------- */
  useSlowScroll(containerRef, { speed: 0.2 });

  return (
    <section
      ref={containerRef}
      data-scrollable
      style={{ WebkitOverflowScrolling: "touch" }}
      className="h-screen no-scrollbar overflow-y-auto max-w-7xl mx-auto w-full p-5 pt-10 pb-20 relative"
    >
      <h2 className="text-3xl font-bold border-b-2 border-neutral-700/70 text-white w-full p-5">
        {data.title}
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
          {data.items.map((item) => (
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
