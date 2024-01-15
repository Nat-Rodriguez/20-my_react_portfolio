// import Project from '../../assets';
import React from 'react';

function Project({ proj }) {
  const mainImgClass = proj.mainImg ? 'mainImg opacityFilter' : 'opacityFilter';
  const captionClass = proj.caption ? 'caption mainCaption' : 'caption subCaption';

  return (
    <a className="project-link" href={proj.href}>
      <div className="project-container">
        <img className={mainImgClass} src={proj.image} alt={proj.alt} />
        <div className={`overlay ${captionClass}`}>
          <h3>{proj.projectTitle}</h3>
          <p>{proj.desc}</p>
        </div>
      </div>
    </a>
  );
}

export default Project;
