import { useState } from 'react';
import Project from "../Project/projects";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      id: 1,
      name: 'Semantic HTML',
      desc: 'Refactored code for more inclusivity',
      link: "https://nat-rodriguez.github.io/1-challenge-semantic-code/",
      repo: "https://github.com/Nat-Rodriguez/1-challenge-semantic-code.git"
    },
    {
      id: 2,
      name: 'Weather Application',
      desc: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS',
      link: "https://nat-rodriguez.github.io/6-weatherdash-challengeAPI/",
      repo: "https://github.com/Nat-Rodriguez/6-weatherdash-challengeAPI.git"
    },
    {
      id: 3,
      name: 'Password Generator',
      desc: 'Generate a password.',
      link: "https://nat-rodriguez.github.io/passwordcreate-challenge3/",
      repo: "https://github.com/Nat-Rodriguez/passwordcreate-challenge3.git"
    },
    {
      id: 3,
      name: 'FitnessApp',
      desc: 'An interactive full-stack application group project that allows users to create an account and track their fitness progress.',
      repo: "https://github.com/VishalManglani7/FitnessApp.git"
    },
    {
      id: 4,
      name: 'Favorite Marvel Characters',
      desc: 'Click on Marvel Characters to pull up information on their movies and comics. Click on result posters to add them to your favorites bar.',
      repo: "https://github.com/BrandonERivera/frontendprobject-1.git"
    },
  ]);

  return (
    <div className="container">
    <h2 className="title">
      <a id="My-Work-Path">My Work</a>
    </h2>
    <div className="projectstuff">
      {projects.map((projects) => (
        <Project key={projects.id}
        
        href={projects.repo} name={project.name} desc={project.desc}/>
      ))}
    </div>
  </div>
);
};

export default Portfolio;
