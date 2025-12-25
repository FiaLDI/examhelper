"use client";

import { useRef, useState, useEffect } from "react";
import { TimelineItem as TimelineItemComponent } from "./TimelineItem";
import { useMounted } from "@/shared/utils/useMounted";
import { TimelineDict } from "@/pages-data/timeline";
import { useDict } from "@/shared/utils/useDict";

type TimeLineProps = {
  timelineDict: TimelineDict;
};

const SCROLL_SPEED = 0.2;

export const TimeLine = ({ timelineDict }: TimeLineProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const mounted = useMounted();

  const clientDict = useDict("timeline");
  const data = mounted ? clientDict : timelineDict;

  const total = data.items.length;

  const progressPercent =
    activeId !== null && total > 1
      ? ((activeId - 1) / (total - 1)) * 100
      : 0;

  /* ---------- SLOW SCROLL ---------- */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      el.scrollTop += e.deltaY * SCROLL_SPEED;
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={containerRef}
      data-scrollable
      className="h-screen no-scrollbar overflow-y-auto max-w-7xl mx-auto w-full p-5 pt-10 relative"
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
