import Image from "next/image";
import projects__pokerfinance from "@/public/images/projects__pokerfinance.png";
import Link from "next/link";

type ProjectProps = {
  title: string;
  image?: string;
  link?: string;
};

function Project({
  title,
  image,
  link = `/${title.toLowerCase().replace(/\s/g, "")}`,
}: ProjectProps) {
  return (
    <div>
      <h3>{title}</h3>
      <Link href={link}>
        <Image src={image} alt="" width={200} height={200}></Image>
      </Link>
    </div>
  );
}

export default Project;
