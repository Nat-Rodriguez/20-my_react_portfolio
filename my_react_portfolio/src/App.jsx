import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Navbar from './components/Nav/navbar';
import { useLocation } from 'react-router-dom';
import Portfolio from './components/Portfolio/portfolio';

function App() {
  const currentPage = useLocation().pathname;

  return (
    <Router>
      <div>
        <Header>
          <Navbar currentPage={currentPage} />
        </Header>
        <main>
          <Portfolio/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
