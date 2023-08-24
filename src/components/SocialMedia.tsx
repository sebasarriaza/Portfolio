import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type SocialMediaProps = {
  icon: any;
  userName: string;
  link?: string;
};

function SocialMedia({ icon, userName, link }: SocialMediaProps) {
  const defaultLink = `https://${icon.iconName}.com/${userName}`;
  link = link ?? defaultLink;

  return (
    <>
      <a href={link} target="_blank">
        <div className="flex items-center p-4">
          <FontAwesomeIcon className="w-8 h-8" icon={icon} />
          <h3 className="hidden">{userName}</h3>
        </div>
      </a>
    </>
  );
}

export default SocialMedia;
