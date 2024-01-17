import Project from '../../assets';
import React from 'react';

function Project({ project }) {
  const mainImgClass = project.mainImg ? 'mainImg opacityFilter' : 'opacityFilter';

  return (
    <a className="project-link" href={proj.href}>
      <div className="project-container">
        <img className={mainImgClass} src={project.image}/>
        <div className={`overlay`}>
          <h3>{project.name}</h3>
          <p>{project.desc}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
