import React, { } from 'react';
import { Grommet, Box, Header, Footer, Main, Sidebar, Stack } from 'grommet';
import FullWebPage from './FullWebPage';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import MainNavBar from './NavBar/MainNavBar'
import Greeting from './MainComponents/Greeting';
import AboutMe from './MainComponents/AboutMe';
import Experience from './MainComponents/Experience/ExperienceComponent';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import { Link } from 'react-router-dom';

function App() {
  return (
    <FullWebPage />
  );
}

export default App;
