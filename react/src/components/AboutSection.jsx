import SectionTemplate from "./SectionTemplate";
import SocialMedia from "./SocialMedia";
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
  return (
    <section>
      <SectionTemplate
        title="About"
        description="Hi, my name is Sebas. I am a frontend web developer with 2 years of experience developing websites. Skills: React, JavaScript, CSS, HTML, Tailwind, GIT, Bash, Linux, Figma, Photoshop and Lightroom."
      >
        <h3>Find me on:</h3>
        <SocialMedia icon={faInstagram} userName="sebasarriaza"/>
        <SocialMedia icon={faTwitter} userName="sebasarriaza" />
        <SocialMedia icon={faGithub} userName="sebasarriaza"/>
        <SocialMedia icon={faLinkedin} userName="Sebas Arriaza" link="https://www.linkedin.com/in/sebas-arriaza-218a6320b/" />
      </SectionTemplate>
    </section>
  );
}

export default AboutSection;
