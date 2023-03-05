import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMedia({ icon, userName, link=`https://${icon.iconName}.com/${userName}` }) {
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
