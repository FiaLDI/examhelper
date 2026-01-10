import { SkillsData } from "@/entities/skill";
import { ContactData } from "@/entities/contact";
import { ProjectsData } from "@/entities/project";
import { TimelineData } from "@/entities/timeline";
import { HeroData } from "@/widgets/hero";

export const dictionaries = {
  hero: HeroData,
  skills: SkillsData,
  contacts: ContactData,
  projects: ProjectsData,
  timeline: TimelineData,
};

export type DictionaryKey = keyof typeof dictionaries;
