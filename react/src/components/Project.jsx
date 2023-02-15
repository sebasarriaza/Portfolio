function Project({
  title,
  image = "./src/assets/images/projects__" + title + ".png",
  link = "./src/assets/projects/" + title + "/index.html",
}) {
  return (
    <div>
      <h3>{title}</h3>
      <a href={link} target="_blank">
        <img src={image} />
      </a>
    </div>
  );
}

export default Project;
