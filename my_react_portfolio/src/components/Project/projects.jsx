function Project(project) {
    const mainImgClass = project.mainImg ? "mainImg opacityFilter" : "opacityFilter";
    const captionClass = project.caption ? "caption mainCaption" : "caption subCaption";

    return (
        <a href={project.href}>
            <figure className="figure greyOverlay">
                <img className={mainImgClass} src={project.image} alt={project.alt} />
                <figcaption className={captionClass}>
                    <h3>{project.projectTitle}</h3>
                    <p>{project.desc}</p>
                </figcaption>
            </figure>
        </a>
    );
}

export default Project;
