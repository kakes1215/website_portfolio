import '../css/App.css';
import Greeting from './HomePage/Greeting';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import AboutMe from './AboutMe';
import Project from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { Main } from 'grommet';

function App() {
  return (
    <div className="App">
      <MainNavBar />
      <SocialMediaLinks />

      <Greeting />
      <AboutMe />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
