import SectionTemplate from "./SectionTemplate";
import Image from "next/image";
import n8n from "@/../public/images/n8n.svg";
import make from "@/../public/images/make.svg";
import chatwoot from "@/../public/images/chatwoot.svg";
import cursor from "@/../public/images/cursor.ico";
import railway from "@/../public/images/railway.svg";
import notion from "@/../public/images/notion.svg";
import openai from "@/../public/images/openai.svg";
import elevenlabs from "@/../public/images/elevenlabs.png";
import meta from "@/../public/images/meta.svg";
import docker from "@/../public/images/docker.svg";
import typescript from "@/../public/images/typescript.svg";
import react from "@/../public/images/react.svg";
import nextjs from "@/../public/images/nextjs.svg";
import prisma from "@/../public/images/prisma.svg";
import supabase from "@/../public/images/supabase.svg";
import postgresql from "@/../public/images/postgresql.svg";
import redis from "@/../public/images/redis.svg";
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

function AboutSection() {
  return (
    <SectionTemplate title="About">
        <p className="tracking-wider lg:text-xl lg:p-4">
        AI fullstack developer based in Spain. Focused on developing innovative projects that provide effective solutions. These are my skills:
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="relative w-full flex flex-col justify-center items-center py-8 lg:py-12">
              <div className="absolute opacity-10 flex justify-center text-8xl">
                <p>AI</p>
              </div>
              <div className="w-full grid grid-cols-5 gap-2 place-items-center lg:grid-cols-3 lg:gap-5 lg:px-16">
                  <Image className="lg:w-[45px]" src={n8n} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={make} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={chatwoot} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={cursor} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={railway} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={notion} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={openai} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={elevenlabs} alt="" height={30} width={30} />
                  <Image className="lg:w-[45px]" src={meta} alt="" height={30} width={30} />
              </div>
            </div>
          <div className="relative w-full flex flex-col justify-center items-center py-8 lg:py-12">
            <div className="absolute opacity-10 flex justify-center text-8xl">
              <p>Web</p>
            </div>
            <div className="w-full grid grid-cols-5 gap-2 place-items-center lg:grid-cols-3 lg:gap-5 lg:px-16">
                <Image className="lg:w-[45px]" src={nextjs} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={supabase} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={prisma} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={typescript} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={react} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={docker} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={git} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={postgresql} alt="" height={30} width={30} />
                <Image className="lg:w-[45px]" src={redis} alt="" height={30} width={30} />
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