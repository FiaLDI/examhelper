"use client";

import { useDict } from "@/shared/lib";
import { SkillGroup } from "./SkillGroup";

export const Skills = () => {
  const data = useDict("skills");
  const groups = useDict("skillsGroup");

  return (
    <section
      className="h-screen w-full"
    >
      <div
        data-scrollable
        style={{ WebkitOverflowScrolling: "touch" }}
        className="
          relative
          h-full w-full flex flex-col lg:justify-center lg:items-center max-w-7xl mx-auto
          px-6 py-10 pb-40 gap-5
          overflow-y-auto overscroll-contain
          touch-pan-y
          no-scrollbar
          text-white 
        "
      >
        {/* HEADER */}
        <div className="max-w-2xl relative z-10">
          <h2
            className="
              text-4xl lg:text-5xl
              font-semibold
              tracking-tight
              w-fit border-b border-indigo-500/60 pb-3
            "
          >
            {data.title}
          </h2>
        </div>

        {/* GROUPS */}
        <div className="flex flex-col gap-5 relative z-10">
          {groups.groups.map((group, idx) => (
            <SkillGroup
              key={`skills-${idx}-${group.level}`}
              group={group}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
