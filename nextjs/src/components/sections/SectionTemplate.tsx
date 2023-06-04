type SectionTemplateProps = {
  title?: string;
  customTitle?: string;
  description?: string;
  children: React.ReactNode;
};

function SectionTemplate({
  title,
  customTitle,
  description,
  children,
}: SectionTemplateProps) {
  const titleOrCustomTitle = customTitle || title;
  const descriptionElement = description ? <p>{description}</p> : null;

  return (
    <section className="flex flex-col w-full bg-zinc-900 rounded-xl z-10" id={title ? title.toLowerCase() : ''}>
      <div className="flex">
        <h2 className="px-5 pt-28 pb-10 text-5xl">{titleOrCustomTitle}</h2>
      </div>
      {descriptionElement}
      {children}
    </section>
  );
}

export default SectionTemplate;
