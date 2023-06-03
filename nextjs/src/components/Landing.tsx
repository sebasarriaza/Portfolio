import SocialMedia from "./SocialMedia";
import {faInstagram, faTwitter, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  return (
    <>
      <div className="flex flex-col mt-[60vh] absolute">
        <SocialMedia icon={faInstagram} userName="sebasarriaza" />
        <SocialMedia icon={faTwitter} userName="sebasarriaza" />
        <SocialMedia icon={faGithub} userName="sebasarriaza" />
        <SocialMedia
          icon={faLinkedin}
          userName="Sebas Arriaza"
          link="https://www.linkedin.com/in/sebas-arriaza-218a6320b/"
        />
      </div>
      <div className="flex flex-col items-center justify-center pt-[30vh] pb-[60vh]">
        <h1 className="text-4xl font-bold sm:text-6xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[6.5rem]">
          <span>Sebas </span><span>Arriaza</span>
        </h1>
        <h2 className="text-xl m-4">Frontend developer</h2>
      </div>
    </>
  );
}

export default Landing;
