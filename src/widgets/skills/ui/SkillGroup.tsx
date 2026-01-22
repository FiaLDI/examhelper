import { SkillGroup as SkillGroupType, SkillItem } from "@/entities/skill";
import { ToTopLeaped } from "@/shared/ui/animation";

export const SkillGroup = ({ group }: { group: SkillGroupType }) => {
  return (
    <ToTopLeaped
        key={group.level}
    >
        {group.glow && (
        <div className="absolute -inset-12 rounded-3xl
                        bg-indigo-500/10 blur-2xl
                        pointer-events-none" />
        )}

        <div className="">
            <h3 className="text-2xl font-medium p-2">{group.level}</h3>
            <p className="text-sm text-neutral-400 max-w-xl p-2">
                {group.description}
            </p>
        </div>

        <div className=" p-6 border-l border-neutral-300">
            {group.items.map((item, idx) => <SkillItem key={`item-skills-${idx}`} item={item} />)}
        </div>
    </ToTopLeaped>
  );
};
