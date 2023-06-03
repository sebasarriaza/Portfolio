import SectionTemplate from "./SectionTemplate";
import Project from "./Project";
import projects__pokerfinance from '@/public/images/projects__pokerfinance.png'
import projects__game from '@/public/images/projects__game.png'
import projects__fenderguitars from '@/public/images/projects__fenderguitars.png'


function ProjectsSection() {
  return (
    <section className="flex flex-col w-full bg-zinc-900">
      <SectionTemplate title="Projects" description={undefined}>
        <Project
          title="Poker Finance"
          image={projects__pokerfinance.src}
          link="https://sj-poker-frontend.vercel.app/"
        />

        <Project
          title="Game"
          image={projects__game.src}
          link="https://sebasarriaza.github.io/Game/"
        />
        <Project
          title="Fender Guitars"
          image={projects__fenderguitars.src}
          link="https://sites.google.com/view/fenderguitar"
        />
      </SectionTemplate>
    </section>
  );
}

export default ProjectsSection;
