import SocialMedia from "./SocialMedia";
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Landing() {
  return (
    <div>
      <h1>Sebas Arriaza</h1>
      <h2>Frontend developer</h2>
      <SocialMedia icon={faInstagram} userName="sebasarriaza" />
      <SocialMedia icon={faTwitter} userName="sebasarriaza" />
      <SocialMedia icon={faGithub} userName="sebasarriaza" />
      <SocialMedia icon={faLinkedin} userName="Sebas Arriaza" link="https://www.linkedin.com/in/sebas-arriaza-218a6320b/" />
    </div>
  );
}

export default Landing;
