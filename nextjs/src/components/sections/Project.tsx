import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import hardhat from "@/public/images/hardhat-colored.svg";
import ethers from "@/public/images/ethers-colored.svg";
import alchemy from "@/public/images/alchemy-colored.svg";
import polygon from "@/public/images/polygon-colored.svg";
import nextjs from "@/public/images/nextjs-colored-dark.svg";
import react from "@/public/images/react-colored.svg";
import typescript from "@/public/images/typescript-colored.svg";
import css3 from "@/public/images/css3-colored.svg";
import git from "@/public/images/git-colored.svg";
import arrow from "@/public/images/arrow.png";


type ProjectProps = {
  title: string;
  image?: string;
  link?: string;
};

function Project({ title, image, link = `/${title.toLowerCase().replace(/\s/g, "")}` }: ProjectProps) {
  return (
    <>
      <div className="pt-4 pb-6">
        <h3 className="text-2xl lg:text-4xl">{title}</h3>
      </div>
      <div className="py-2 lg:flex lg:justify-center lg:absolute lg:right-[5vw] lg:top-0 lg:h-[100%]">
        {image && (
          <Image className="lg:object-contain lg:w-[40vw]" src={image} alt="" width={400} height={400} />
        )}
      </div>
      <div className="py-2 lg:py-6 lg:w-[40vw]">
        <p className="opacity-80 tracking-wider lg:text-lg">Revolutionizing poker tournaments with a blockchain platform. Players receive funding, investors earn from winnings.</p>
      </div>
      <div className="flex justify-between py-2 lg:w-[35vw] lg:py-6">
      <Image src={hardhat} alt="" height={30} width={30} />
      <Image src={ethers} alt="" height={30} width={30} />
      <Image src={alchemy} alt="" height={30} width={30} />
      <Image src={polygon} alt="" height={30} width={30} />
      <Image src={nextjs} alt="" height={30} width={30} />
      <Image src={react} alt="" height={30} width={30} />
      <Image src={typescript} alt="" height={30} width={30} />
      <Image src={css3} alt="" height={30} width={30} />
      <Image src={git} alt="" height={30} width={30} />
      </div>
      <div className="pt-4 flex lg:pt-6">
        <Link href={link}>
          <button type="button" className="flex items-center p-2 mr-1 mb-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 lg:mr-2">
          <FontAwesomeIcon className="w-5 h-5 lg:w-7 lg:h-7" icon={faGithub} />
          <span className="pl-2 text-lg lg:text-xl">
            Source
          </span>
          </button>
        </Link>
        <Link href={link}>
          <button type="button" className="flex items-center p-2 ml-1 mb-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 lg:ml-2">
          <FontAwesomeIcon className="w-5 h-5" icon={faArrowUpRightFromSquare} />
          <span className="pl-2 text-lg">
            Live
          </span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Project;
