import React, { } from 'react';
import Greeting from './MainComponents/Greeting';
import AboutMe from './MainComponents/AboutMe';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Experience from './MainComponents/Experience';
import { Box } from 'grommet';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import MainPageFooter from './NavBar/MainPageFooter';
import Footer from './NavBar/MainPageFooter';


function FullWebPage() {
    return (
        <>
            <Box>
                <Greeting />
            </Box>
            <Box>
                <AboutMe />
            </Box>
            <Box>
                <Experience />
            </Box>
            <Box>
                <ProjectContainer />
            </Box>
            <Box>
                <ContactMe />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

export default FullWebPage;