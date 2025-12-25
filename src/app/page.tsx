import { FullpageLayout } from "@/shared/lib/scroll-to-section/FullpageLayout";
import { getDict } from "@/shared/utils/getDict";
import { getLang } from "@/shared/utils/server/getLang";
import { Contacts } from "@/widgets/contacts ";
import { Hero } from "@/widgets/hero";
import { ProjectList } from "@/widgets/project-list";
import { Skills } from "@/widgets/skills";
import { TimeLine } from "@/widgets/timeline";

export default async function Page() {
  const lang = await getLang();
  const heroDict = getDict(lang, "hero");
  const contactsDict = getDict(lang, "contacts");
  const skillsDict = getDict(lang, "skills");
  const projectsDict = getDict(lang, "projects");
    const timelineDict = getDict(lang, "timeline");


  return (
      <FullpageLayout
        sections={[
          <Hero key="hero" heroDict={heroDict} />,
          <Skills key="skills" skillsDict={skillsDict}/>,
          <ProjectList key="projects" projectsDict={projectsDict} />,
            <TimeLine key="timeline" timelineDict={timelineDict} />,
          <Contacts key="contacts"  contactsDict={contactsDict}/>,
        ]}
      />
  );
}
