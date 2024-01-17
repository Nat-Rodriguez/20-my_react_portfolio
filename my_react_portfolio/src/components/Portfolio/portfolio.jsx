import { useState } from 'react';
import Project from "../Project/projects";
import img1 from "../../assets/pawsandfound.png";
import img2 from "../../assets/weather.jpg";
import img3 from "../../assets/passwordgen.jpg"
import img4 from "../../assets/fitnessapp.jpg";
import img5 from "../../assets/favoritemarvel.jpg";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projectslist] = useState([
    {
      id: 1,
      name: 'PawsAndFound',
      desc: 'This is a reactive MERN application using Apollo to run GraphQL API queries on our backend server',
      link: "https://pawsandfound-dd3dbebb5f23.herokuapp.com/",
      repo: "https://github.com/smindre1/PawsAndFound.git",
      img: img1,
    },
    {
      id: 2,
      name: 'Weather Application',
      desc: 'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS',
      link: "https://nat-rodriguez.github.io/6-weatherdash-challengeAPI/",
      repo: "https://github.com/Nat-Rodriguez/6-weatherdash-challengeAPI.git",
      img: img2,
    },
    {
      id: 3,
      name: 'Password Generator',
      desc: 'Generate a password.',
      link: "https://nat-rodriguez.github.io/passwordcreate-challenge3/",
      repo: "https://github.com/Nat-Rodriguez/passwordcreate-challenge3.git",
      img: img3,
    },
    {
      id: 3,
      name: 'FitnessApp',
      desc: 'An interactive full-stack application group project that allows users to create an account and track their fitness progress.',
      link: "https://stark-ravine-62918-3acd7b3efa98.herokuapp.com/",
      repo: "https://github.com/VishalManglani7/FitnessApp.git",
      img: img4,
    },
    {
      id: 4,
      name: 'Favorite Marvel Characters',
      desc: 'Click on Marvel Characters to pull up information on their movies and comics. Click on result posters to add them to your favorites bar.',
      link: "https://brandonerivera.github.io/frontendprobject-1/",
      repo: "https://github.com/BrandonERivera/frontendprobject-1.git",
      img: img5
    },
  ]);

  return (
    <div className="container">
    <h2 className="title">
      <a id="My-Work-Path">My Work</a>
    </h2>
    <div className="projectstuff">
      {projectslist.map((projectslist) => (
        <Project key={projectslist.id}
        
        href={projectslist.repo} image={projectslist.img} name={projectslist.name} desc={projectslist.desc}/>
      ))}
    </div>
  </div>
);
};

export default Portfolio;


