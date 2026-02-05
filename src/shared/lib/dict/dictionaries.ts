import { HeroData, HeroDict } from "@/widgets/hero";
import { SkillsGroupData, SkillsGroupDict } from "@/entities/skill";
import { ProjectsData, ProjectsDict } from "@/entities/project";
import { TimelineData, TimelineDict } from "@/entities/timeline";

import { IDict } from "./types";

export const dictionaries = {
  hero: HeroData,
  skillsGroup: SkillsGroupData,
  projects: ProjectsData,
  timeline: TimelineData,
} satisfies {
  hero: IDict<HeroDict>;
  skillsGroup: IDict<SkillsGroupDict>;
  projects: IDict<ProjectsDict>;
  timeline: IDict<TimelineDict>;
};

export type DictionaryKey = keyof typeof dictionaries;
