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
    <div>
      <a href={link} target='_blank'>
        <FontAwesomeIcon icon={icon} size='10x' />
        <h3>{userName}</h3>
      </a>
    </div>
  );
}

export default SocialMedia;
