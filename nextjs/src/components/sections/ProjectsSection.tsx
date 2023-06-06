import SectionTemplate from "./SectionTemplate";
import Project from "./Project";
import pokerfinance from '@/public/images/pokerfinanceMockup.png'


function ProjectsSection() {
  return (
    <SectionTemplate title="Projects" customTitle="My last project:">
        <Project
          title="Poker Finance"
          image={pokerfinance.src}
          liveLink="https://sj-poker-frontend.vercel.app/"
        />
      </SectionTemplate>
  );
}

export default ProjectsSection;
