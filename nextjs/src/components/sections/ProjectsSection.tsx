import SectionTemplate from "./SectionTemplate";
import Project from "./Project";
import pokerfinance from '@/public/images/pokerfinanceScreen.png'
import projects__game from '@/public/images/projects__game.png'
import projects__fenderguitars from '@/public/images/projects__fenderguitars.png'


function ProjectsSection() {
  return (
    <SectionTemplate title="Projects" customTitle="My last project:">
        <Project
          title="Poker Finance"
          image={pokerfinance.src}
          link="https://sj-poker-frontend.vercel.app/"
        />
      </SectionTemplate>
  );
}

export default ProjectsSection;
