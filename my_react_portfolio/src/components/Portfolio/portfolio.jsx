import { useState } from 'react';
import Project from "../Project/projects";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Semantic HTML',
      description: 'Refactored code for more inclusivity',
      link: "https://nat-rodriguez.github.io/1-challenge-semantic-code/",
      repo: "https://github.com/Nat-Rodriguez/1-challenge-semantic-code.git"
    },
    {
      name: 'Weather Application',
      description: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS',
      link: "https://nat-rodriguez.github.io/6-weatherdash-challengeAPI/",
      repo: "https://github.com/Nat-Rodriguez/6-weatherdash-challengeAPI.git"
    },
    {
      name: 'Password Generator',
      description: 'Generate a password.',
      link: "https://nat-rodriguez.github.io/passwordcreate-challenge3/",
      repo: "https://github.com/Nat-Rodriguez/passwordcreate-challenge3.git"
    },
    {
      name: 'FitnessApp',
      description: 'An interactive full-stack application group project that allows users to create an account and track their fitness progress.',
      repo: "https://github.com/VishalManglani7/FitnessApp.git"
    },
    {
      name: 'Favorite Marvel Characters',
      description: 'Click on Marvel Characters to pull up information on their movies and comics. Click on result posters to add them to your favorites bar.',
      repo: "https://github.com/BrandonERivera/frontendprobject-1.git"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
