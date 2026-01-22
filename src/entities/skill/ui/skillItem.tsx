"use client";

import { SkillItemType } from "../types/skills.types";

export const SkillItem = ({item}: {item: SkillItemType}) => 
(
    <div key={item.capability} className="fl">
        <p className="text-base text-neutral-200">
            {item.capability}
        </p>

        <div className="flex flex-col flex-wrap gap-2 p-2">
            {item.stack.map((tech) => (
            <span
                key={tech}
                className=" w-fit px-3 py-1 text-sm rounded-md
                            
                            bg-neutral-900/80 text-neutral-300"
            >
                {tech}
            </span>
            ))}
        </div>
    </div>
)