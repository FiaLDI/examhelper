"use client";
import {
  TimelineItem as TimelineItemComponent,
} from "@/entities/timeline";
import { useDict } from "@/shared/lib";
import { useSlowScroll } from "@/shared/hooks/scroll";
import { useTimeLineProgress } from "../model/useTimeLineProgress";

export const TimeLine = () => {
  const data = useDict("timelineWidget");
  const items = useDict("timeline");
    
  const {
    containerRef, 
    activeId,
    setActiveId, 
    progressPercent
  } = useTimeLineProgress(items);

  useSlowScroll(containerRef, { speed: 0.2 });

  return (
    <section
      ref={containerRef}
      data-scrollable
      style={{ WebkitOverflowScrolling: "touch" }}
      className="h-screen no-scrollbar overflow-y-auto
                 max-w-7xl mx-auto w-full
                 p-5 pt-10 pb-20 relative"
    >
      <h2 className="text-3xl font-bold
                     border-b-2 border-neutral-700/70
                     text-white w-full p-5">
        {data.title}
      </h2>

      <div className="relative mt-16">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full">
          <div className="absolute top-0 bottom-0 w-px bg-neutral-700/40" />
          <div
            className="absolute top-0 w-px bg-indigo-500"
            style={{ height: `${progressPercent}%` }}
          />
        </div>

        <ol className="relative space-y-24">
          {items.items.map((item) => (
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
