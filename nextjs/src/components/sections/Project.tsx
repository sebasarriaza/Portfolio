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
    <div className="border border-white rounded-xl mx-3 my-8 p-2 overflow-hidden">
      <div>
        <h3 className="pt-4 pb-6 text-2xl">{title}</h3>
      </div>
      <div className="flex -mr-3">
        {image && (
          <Image className="py-2" src={image} alt="" width={400} height={400} />
        )}
      </div>
      <div>
        <p className="py-2 opacity-80 tracking-wider">Revolutionizing poker tournaments with a blockchain platform. Players receive funding, investors earn from winnings.</p>
      </div>
      <div className="flex justify-between py-2">
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
      <div className="pt-4 flex">
        <Link href={link}>
          <button type="button" className="flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center p-2 mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          <FontAwesomeIcon className="w-6" icon={faGithub} />
          <span className="pl-2">
            Source
          </span>
          </button>
        </Link>
        <Link href={link}>
          <button type="button" className="flex items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center p-2 mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
          <FontAwesomeIcon className="w-5" icon={faArrowUpRightFromSquare} />
          <span className="pl-2">
            Live
          </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Project;
