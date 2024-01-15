import './App.css';
import Header from '../../';
import AboutMe from './components/AboutMe';
import ProjectDisplay from './components/ProjectDisplay';
import Contacts from './components/Contacts';


function App() {
  return (
    <div className="mainPage">
      <Header />
      <AboutMe />
      <ProjectDisplay />
      <Contacts />
    </div>
  );
}

export default App;