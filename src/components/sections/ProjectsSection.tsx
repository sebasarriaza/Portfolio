import SectionTemplate from "./SectionTemplate";
import Project from "./Project";
import pokerfinanceIcon from '@/public/images/pokerfinanceIcon.png'
import pokerfinanceMockup from '@/public/images/pokerfinanceMockup.png'


function ProjectsSection() {
  return (
    <SectionTemplate title="Projects" customTitle="My last project:">
        <Project
          title="Poker Finance"
          icon={pokerfinanceIcon.src}
          image={pokerfinanceMockup.src}
          liveLink="https://sj-poker-frontend.vercel.app/"
        />
      </SectionTemplate>
  );
}

export default ProjectsSection;
