import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import solidity from "@/../public/images/solidity.svg";
import hardhat from "@/../public/images/hardhat.svg";
import ethers from "@/../public/images/ethers.svg";
import alchemy from "@/../public/images/alchemy.svg";
import polygon from "@/../public/images/polygon.svg";
import nextjs from "@/../public/images/nextjs.svg";
import react from "@/../public/images/react.svg";
import typescript from "@/../public/images/typescript.svg";
import css from "@/../public/images/css.svg";
import git from "@/../public/images/git.svg";


type ProjectProps = {
  title: string;
  icon?: string;
  image: string;
  githubLink?: string;
  liveLink: string;
};

function Project({ title, icon, image, liveLink}: ProjectProps) {
  return (
    <>
      <div className="flex pt-4 pb-6">
      {icon && (
          <Image src={icon} alt="" width={40} height={30}/>
        )}
        <h3 className="text-2xl lg:text-4xl">{title}</h3>
      </div>
      <div className="py-2 lg:flex lg:justify-end lg:absolute lg:right-[5%] lg:top-0 lg:h-[100%] lg:pl-[40vw] xl:pl-0">
        {image && (
          <Image className="lg:object-contain lg:w-[90%]" src={image} alt="" width={400} height={400} />
        )}
      </div>
      <div className="py-2 lg:py-6 lg:w-[40vw] lg:max-w-[50%]">
        <p className="opacity-80 tracking-wider lg:text-lg">Revolutionizing poker tournaments with a blockchain platform. Players receive funding, investors earn from winnings.</p>
      </div>
      <div className="flex justify-between py-2 lg:w-[35vw] lg:max-w-[50%] lg:py-6">
      <Image src={solidity} alt="solidity" height={30} width={30} />
      <Image src={hardhat} alt="hardhat" height={30} width={30} />
      <Image src={ethers} alt="ethers" height={30} width={30} />
      <Image src={alchemy} alt="alchemy" height={30} width={30} />
      <Image src={polygon} alt="polygon" height={30} width={30} />
      <Image src={nextjs} alt="nextjs" height={30} width={30} />
      <Image src={react} alt="react" height={30} width={30} />
      <Image src={typescript} alt="typescript" height={30} width={30} />
      <Image src={css} alt="css" height={30} width={30} />
      <Image src={git} alt="git" height={30} width={30} />
      </div>
      <div className="pt-4 flex lg:pt-6">
        <Link href={"https://github.com/sebasarriaza/PokerFinance-Frontend"}>
          <button type="button" className="flex items-center p-2 mr-1 mb-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 lg:mr-2">
          <FontAwesomeIcon className="w-5 h-5 lg:w-7 lg:h-7" icon={faGithub} />
          <span className="pl-2 text-lg lg:text-xl">
            Source
          </span>
          </button>
        </Link>
        <Link href={liveLink}>
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
