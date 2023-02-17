import SectionTemplate from "./SectionTemplate";
import SocialMedia from "./SocialMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function AboutSection() {
  return (
    <section>
      <SectionTemplate
        title="About"
        description="Hi, my name is Sebas. I am a frontend web developer with 2 years of experience developing websites. Skills: React, JavaScript, CSS, HTML, Tailwind, GIT, Bash, Linux, Figma, Photoshop and Lightroom."
      >
        <SocialMedia userName="sebasarriaza">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialMedia>
      </SectionTemplate>
    </section>
  );
}

export default AboutSection;
