type SectionTemplateProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

function SectionTemplate({ title, description, children }: SectionTemplateProps) {
  const titleLowercased = title.toLowerCase();
  const descriptionConditional = description ? <p>{description}</p> : null;
  return (
    <>
      <a id={titleLowercased}></a>
      <h2>{title}</h2>
      {descriptionConditional}
      {children}
    </>
  );
}

export default SectionTemplate;
