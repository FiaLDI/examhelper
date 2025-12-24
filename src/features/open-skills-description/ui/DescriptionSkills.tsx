"use client";

import React from "react";
import { skillDescription } from "@/entities/skills-description/interface";

export const DescriptionSkills: React.FC<skillDescription> = ({ title, description, time }) => {
  return (
    <li className="relative px-5 py-2 border border-neutral-700 rounded-md text-sm group cursor-pointer bg-[#242424]/20 ">
      {title}

      <div
        className="
          absolute left-1/2 top-full mt-2 w-max max-w-xs 
          -translate-x-1/2 
          hidden group-hover:block 
          bg-neutral-900/80 backdrop-blur-xl text-neutral-100 
          text-xs p-2 rounded-md 
          border border-neutral-700 
          shadow-lg z-20 whitespace-normal
        "
      >
        {description} {time && <span className="opacity-70 ml-1">({time})</span>}
      </div>
    </li>
  );
};
