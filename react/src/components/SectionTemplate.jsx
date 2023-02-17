function SectionTemplate({ title, description, children }) {
  const titleLowercased = title.toLowerCase();
  const descriptionConditional = description ? <p>{description}</p> : null;
  return (
    <>
      <a name={titleLowercased}></a>
      <h2>{title}</h2>
      {descriptionConditional}
      {children}
    </>
  );
}

export default SectionTemplate;
