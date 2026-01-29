import { SkillGroup as SkillGroupType } from "@/entities/skill";
import { ToTopLeaped } from "@/shared/ui/animation";

export const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <ToTopLeaped key={group.level}>
      <div className="relative">

        {/* OPTIONAL GLOW */}
        {group.glow && (
          <div
            className="
              absolute -inset-16
              rounded-3xl
              bg-indigo-500/10
              blur-3xl
              pointer-events-none
            "
          />
        )}

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

          {/* LEFT — META */}
          <div>
            <h3
              className="
                text-2xl
                font-medium
                tracking-tight
              "
            >
              {group.level}
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-neutral-400
                leading-relaxed
              "
            >
              {group.description}
            </p>
          </div>

          {/* RIGHT — SKILLS */}
          <div
            className="
              relative
               flex flex-col lg:grid grid-cols-3 gap-5
            "
          >
            {group.items.map((item, idx) => (
                <div
                    key={`item-skills-${idx}`}
                    className="
                    rounded-md
                    border border-neutral-800
                    bg-neutral-900/60
                    px-4 py-3
                    hover:border-indigo-500/40
                    transition-colors
                    "
                >
                    {/* Capability */}
                    <div className="text-sm text-neutral-200">
                    {item.capability}
                    </div>

                    {/* Stack */}
                    <div className="mt-1 text-xs text-neutral-400">
                    {item.stack.join(" · ")}
                    </div>
                </div>
                ))}

          </div>

        </div>
      </div>
    </ToTopLeaped>
  );
};
