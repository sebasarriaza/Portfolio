function SocialMedia({ children, userName }) {
  return (
    <div>
      {children}
      <h3>{userName}</h3>
    </div>
  );
}

export default SocialMedia;
