import { ModalContainer } from "@/features/open-modal";
import { FullpageLayout } from "@/shared/lib/scroll-to-section/FullpageLayout";
import { Contacts } from "@/widgets/Contacts ";
import { Hero } from "@/widgets/hero";
import { ProjectList } from "@/widgets/project-list";
import { Skills } from "@/widgets/skills";
import { TimeLine } from "@/widgets/timeline";


export default function Home() {
  return (
    <>
      <FullpageLayout
        sections={[
          <Hero key="hero" />,
          <Skills key="skills" />,
          <ProjectList key="projects" />,
          <TimeLine key="timeline" />,
          <Contacts key="contacts" />,
        ]}
      />
      <ModalContainer />
    </>
  );
}
