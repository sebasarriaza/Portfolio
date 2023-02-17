import SectionTemplate from "./SectionTemplate";
import SocialMedia from "./SocialMedia";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
  return (
    <section>
      <SectionTemplate
        title="About"
        description="Hi, my name is Sebas. I am a frontend web developer with 2 years of experience developing websites. Skills: React, JavaScript, CSS, HTML, Tailwind, GIT, Bash, Linux, Figma, Photoshop and Lightroom."
      >
        <SocialMedia icon={faGithub} userName="sebasarriaza" />
      </SectionTemplate>
    </section>
  );
}

export default AboutSection;
