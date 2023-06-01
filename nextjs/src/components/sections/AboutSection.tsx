import SectionTemplate from "./SectionTemplate";

function AboutSection() {
  return (
    <section className="about">
      <SectionTemplate title="About">
        <p className="about__description">I&apos;m a front-end developer. In the last four years I learnt a lot of skills and technologies:</p>
        <p className="about__technologies">Web2 technologies: Javascript, Typescrypt, React, Nextjs, Nodejs, Express</p>
        <p className="about__technologies">Web3 technologies: Solidity, Hardhat, Wagmi, Rainbowkit, Chainlink oracles, ERC20, ERC721, ERC1155</p>
        <p className="about__technologies">UI/UX technologies: HTML, CSS, Tailwind, Material UI, Figma, Adobexd, Lightroom, Photoshop</p>
        <p className="about__technologies">Other technologies: GIT, Bash, Linux, Vercel</p>
      </SectionTemplate>
    </section>
  );
}

export default AboutSection;
