import React from 'react'
import './App.css';
import Header from './components/Header/header';
import AboutMe from './components/About/about';
import ProjectDisplay from './components/Project/projects';
import Portfolio from './components/Portfolio/portfolio';
import Footer from './components/Footer/footer';
import Navbar from './components/Nav/navbar';
import "./app.css"

function App() {
  return (
    <div className="mainPage">
      <Header/>
      <Navbar/>
      <AboutMe />
      <Portfolio/>
      <ProjectDisplay />
      <Footer />
    </div>
  );
}

export default App;