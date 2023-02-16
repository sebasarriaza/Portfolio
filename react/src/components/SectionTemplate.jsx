function SectionTemplate({ title, description, a, children }) {
  const titleLowercased = title.toLowerCase();
  return (
    <section>
      <a name={titleLowercased}></a>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
}

export default SectionTemplate;
