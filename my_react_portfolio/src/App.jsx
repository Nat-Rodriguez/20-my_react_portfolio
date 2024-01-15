import React from 'react'
import './App.css';
import Header from './components/Header/header';
import AboutMe from './components/About/about';
import ProjectDisplay from './components/Project/projects';
import Contacts from './components/Contact/contactpage';


function App() {
  return (
    <div className="mainPage">
      <Header />
      <AboutMe />
      {/* <ProjectDisplay /> */}
      <Contacts />
    </div>
  );
}

export default App;