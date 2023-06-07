import SectionTemplate from "./SectionTemplate";
import Image from "next/image";
import solidity from "@/public/images/solidity.svg";
import hardhat from "@/public/images/hardhat.svg";
import ethers from "@/public/images/ethers.svg";
import chainlink from "@/public/images/chainlink.svg";
import alchemy from "@/public/images/alchemy.svg";
import ethereum from "@/public/images/ethereum.svg";
import polygon from "@/public/images/polygon.svg";
import javascript from "@/public/images/javascript.svg";
import typescript from "@/public/images/typescript.svg";
import react from "@/public/images/react.svg";
import vite from "@/public/images/vite.svg";
import nextjs from "@/public/images/nextjs.svg";
import prisma from "@/public/images/prisma.svg";
import t3 from "@/public/images/t3.svg";
import html from "@/public/images/html.svg";
import css from "@/public/images/css.svg";
import sass from "@/public/images/sass.svg";
import tailwind from "@/public/images/tailwind.svg";
import materialui from "@/public/images/materialui.svg";
import chakra from "@/public/images/chakra.svg";
import figma from "@/public/images/figma.svg";
import adobexd from "@/public/images/adobexd.svg";
import photoshop from "@/public/images/photoshop.svg";
import git from "@/public/images/git.svg";
import turborepo from "@/public/images/turborepo.svg";
import bash from "@/public/images/bash.svg";
import kali from "@/public/images/kali.svg";


function AboutSection() {
  return (
    <SectionTemplate title="About">
      <section>
        <p>I am a fullstack web3 developer. In recent years, I have focused on building a solid programming base and creating interesting projects. My experience lies in the development of innovative and visually appealing applications that provide effective solutions. These are my skills:.</p>
        <p>Web3 technologies: Solidity, Hardhat, Ethers, Wagmi, Rainbowkit, Chainlink oracles, ERC20, ERC721, ERC1155</p>
        <div className="flex">
          <Image src={solidity} alt="" height={30} width={30} />
          <Image src={hardhat} alt="" height={30} width={30} />
          <Image src={ethers} alt="" height={30} width={30} />
          <Image src={chainlink} alt="" height={30} width={30} />
          <Image src={alchemy} alt="" height={30} width={30} />
          <Image src={ethereum} alt="" height={30} width={30} />
          <Image src={polygon} alt="" height={30} width={30} />
        </div>
        <p>Web2 technologies: Javascript, Typescrypt, React, Vite, Nextjs, Prisma, T3</p>
        <div className="flex">
          <Image src={javascript} alt="" height={30} width={30} />
          <Image src={typescript} alt="" height={30} width={30} />
          <Image src={react} alt="" height={30} width={30} />
          <Image src={vite} alt="" height={30} width={30} />
          <Image src={nextjs} alt="" height={30} width={30} />
          <Image src={prisma} alt="" height={30} width={30} />
          <Image src={t3} alt="" height={30} width={30} />
        </div>
        <p>UI/UX technologies: HTML, CSS, Sass, Tailwind, Material UI, Figma, Adobexd, Lightroom, Photoshop</p>
        <div className="flex">
          <Image src={html} alt="" height={30} width={30} />
          <Image src={css} alt="" height={30} width={30} />
          <Image src={sass} alt="" height={30} width={30} />
          <Image src={tailwind} alt="" height={30} width={30} />
          <Image src={materialui} alt="" height={30} width={30} />
          <Image src={chakra} alt="" height={30} width={30} />
          <Image src={figma} alt="" height={30} width={30} />
          <Image src={adobexd} alt="" height={30} width={30} />
          <Image src={photoshop} alt="" height={30} width={30} />
        </div>
        <p>Other technologies: GIT, Turborepo Bash, Linux</p>
        <div className="flex">
          <Image src={git} alt="" height={30} width={30} />
          <Image src={turborepo} alt="" height={30} width={30} />
          <Image src={bash} alt="" height={30} width={30} />
          <Image src={kali} alt="" height={30} width={30} />
        </div>
      </section>
    </SectionTemplate>
  );
}

export default AboutSection;
