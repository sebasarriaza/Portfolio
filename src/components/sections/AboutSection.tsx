import SectionTemplate from "./SectionTemplate";
import Image from "next/image";
import solidity from "@/../public/images/solidity.svg";
import hardhat from "@/../public/images/hardhat.svg";
import ethers from "@/../public/images/ethers.svg";
import wagmi from "@/../public/images/wagmi.svg";
import rainbowkit from "@/../public/images/rainbowkit.svg";
import alchemy from "@/../public/images/alchemy.svg";
import chainlink from "@/../public/images/chainlink.svg";
import ethereum from "@/../public/images/ethereum.svg";
import foundry from "@/../public/images/foundry.svg";
import docker from "@/../public/images/docker.svg";
import typescript from "@/../public/images/typescript.svg";
import react from "@/../public/images/react.svg";
import vite from "@/../public/images/vite.svg";
import nextjs from "@/../public/images/nextjs.svg";
import prisma from "@/../public/images/prisma.svg";
import t3 from "@/../public/images/t3.svg";
import html from "@/../public/images/html.svg";
import css from "@/../public/images/css.svg";
import sass from "@/../public/images/sass.svg";
import tailwind from "@/../public/images/tailwind.svg";
import materialui from "@/../public/images/materialui.svg";
import chakra from "@/../public/images/chakra.svg";
import figma from "@/../public/images/figma.svg";
import adobexd from "@/../public/images/adobexd.svg";
import photoshop from "@/../public/images/photoshop.svg";
import git from "@/../public/images/git.svg";
import turborepo from "@/../public/images/turborepo.svg";

function AboutSection() {
  return (
    <SectionTemplate title="About">
        <p className="tracking-wider lg:text-xl lg:p-4">
        I am a fullstack web3 developer based in Spain. Over the past few years, I have focused on building a strong programming foundation and developing innovative projects that provide effective solutions. These are my skills:
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="relative w-full flex flex-col justify-center items-center py-8 lg:py-12">
              <div className="absolute opacity-10 flex justify-center text-8xl">
                <p>web3</p>
              </div>
              <div className="w-full grid grid-cols-5 gap-2 place-items-center lg:grid-cols-3 lg:gap-5 lg:px-16">
                  <Image className="lg:w-[45px]" src={solidity} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px] invert" src={foundry} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={hardhat} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={ethers} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={wagmi} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={rainbowkit} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={chainlink} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={alchemy} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={ethereum} alt="" height={30} width={30} />
              </div>
            </div>
          <div className="relative w-full flex flex-col justify-center items-center py-8 lg:py-12">
            <div className="absolute opacity-10 flex justify-center text-8xl">
              <p>web2</p>
            </div>
            <div className="w-full grid grid-cols-5 gap-2 place-items-center lg:grid-cols-3 lg:gap-5 lg:px-16">
                <Image className="lg:w-[45px]" src={t3} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={prisma} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={nextjs} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={vite} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={react} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={typescript} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={docker} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={git} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={turborepo} alt="" height={30} width={30} />
            </div>
          </div>
          <div className="relative w-full flex flex-col justify-center items-center py-8 lg:py-12">
            <div className="absolute opacity-10 flex justify-center text-8xl">
              <p>UI/UX</p>
            </div>
            <div className="w-full grid grid-cols-5 gap-2 place-items-center lg:grid-cols-3 lg:gap-5 lg:px-16">
                <Image className="lg:w-[45px]" src={html} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={css} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={sass} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={tailwind} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={materialui} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={chakra} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={figma} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={adobexd} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={photoshop} alt="" height={30} width={30} />
            </div>
          </div>
        </div>
    </SectionTemplate>
  );
}

export default AboutSection;
