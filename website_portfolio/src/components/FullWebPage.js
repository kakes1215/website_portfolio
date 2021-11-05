import React, { } from 'react';
import Greeting from './MainComponents/Greeting';
import AboutMe from './MainComponents/AboutMe';
import Experience from './MainComponents/Experience';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import Footer from './NavBar/MainPageFooter';


function FullWebPage() {
    return (
        <>
            <Greeting />
            <AboutMe />
            <Experience />
            <ProjectContainer />
            <ContactMe />
            <Footer />
        </>
    )
}

export default FullWebPage;