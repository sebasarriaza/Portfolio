import Image from "next/image";
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
      {image && <Image src={image} alt="" width={200} height={200} />}
      </Link>
    </div>
  );
}

export default Project;
