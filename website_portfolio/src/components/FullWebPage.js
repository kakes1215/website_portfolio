import React, { } from 'react';
import { Box } from 'grommet';
import AboutMe from './MainComponents/AboutMe';
import Experience from './MainComponents/Experience/ExperienceComponent';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import Footer from './NavBar/MainPageFooter';
import Greeting from './MainComponents/Greeting';

function FullWebPage() {
    return (
        <>
            <Box id='greeting'>
                <Greeting />
            </Box>
            <Box id='aboutMe' pad='none' >
                <AboutMe />
            </Box>
            <Box id='experience' >
                <Experience />
            </Box>
            <Box id='projects'>
                <ProjectContainer />
            </Box>
            <Box id='contactMe'>
                <ContactMe />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}
export default FullWebPage;