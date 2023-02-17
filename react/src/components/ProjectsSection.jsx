import SectionTemplate from "./SectionTemplate.jsx";
import Project from "./Project.jsx";

function ProjectsSection() {
  return (
    <section>
      <SectionTemplate title="Projects">
        <Project
          title="Game"
        />
        <Project
          title="Fender Guitars"
          image="./src/assets/images/projects__fenderguitars.png"
          link="https://sites.google.com/view/fenderguitar"
        />
        <Project
          title="Motorbike"
          link="./src/assets/projects/Motorbike/Work in prorgess.html"
        />
      </SectionTemplate>
    </section>
  );
}

export default ProjectsSection;
