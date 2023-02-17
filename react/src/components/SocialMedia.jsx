import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMedia({ icon, userName }) {
  return (
    <div>
      <FontAwesomeIcon icon={icon} size='10x' />
      <h3>{userName}</h3>
    </div>
  );
}

export default SocialMedia;
