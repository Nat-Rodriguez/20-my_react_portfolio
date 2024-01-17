import React, { Component } from 'react';
import Resume from '../Resume/pdf';

function Resume() {
  return (
    <section className="myresume">
      <div className="pdf">
      <p>
        Download my <a href = {Pdf} target = "Resume.pdf">Resume!</a>
        </p>
        <h3>Front-End Skills</h3>
        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-End Skills</h3>
        <ul className="skill-list">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
