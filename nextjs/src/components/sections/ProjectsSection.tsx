import SectionTemplate from "./SectionTemplate";
import Project from "./Project";
import projects__pokerfinance from '@/public/images/projects__pokerfinance.png'
import projects__game from '@/public/images/projects__game.png'
import projects__fenderguitars from '@/public/images/projects__fenderguitars.png'
import projects__motorbike from '@/public/images/projects__motorbike.png'


function ProjectsSection() {
  return (
    <section>
      <SectionTemplate title="Projects" description={undefined}>
        <Project
          title="Poker Finance"
          image={projects__pokerfinance}
          link="https://sj-poker-frontend.vercel.app/"
        />

        <Project
          title="Game"
          image={projects__game}
        />
        <Project
          title="Fender Guitars"
          image={projects__fenderguitars}
          link="https://sites.google.com/view/fenderguitar"
        />
        <Project
          title="Motorbike"
          image={projects__motorbike}
          link="@/src/public/projects/Motorbike/Work in prorgess.html"
        />
      </SectionTemplate>
    </section>
  );
}

export default ProjectsSection;
