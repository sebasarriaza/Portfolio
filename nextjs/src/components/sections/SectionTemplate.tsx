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
    <section className="flex flex-col w-full bg-zinc-900 rounded-xl z-10 lg:py-[22vh]" id={title ? title.toLowerCase() : ''}>
      <div className="flex">
        <h2 className="px-5 pt-28 pb-8 text-5xl lg:pt-0">{titleOrCustomTitle}</h2>
      </div>
      {descriptionElement}
      {children}
    </section>
  );
}

export default SectionTemplate;
