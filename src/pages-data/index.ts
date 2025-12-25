import { ContactData } from "./contact";
import { HeroData } from "./hero";
import { ProjectsData } from "./projects";
import { SkillsData } from "./skills";
import { TimelineData } from "./timeline";

export const dictionaries = {
  hero: HeroData,
  skills: SkillsData,
  contacts: ContactData,
  projects: ProjectsData,
  timeline: TimelineData,
};


export type DictionaryKey = keyof typeof dictionaries;
