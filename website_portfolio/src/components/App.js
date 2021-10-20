import '../css/App.css';
import Greeting from './Greeting';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import Project from './Projects';
import Skills from './Skills';
import Contact from './Contact';




function App() {
  return (
    <div className="App">
      <Greeting />
      <NavBar />
      <AboutMe />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
