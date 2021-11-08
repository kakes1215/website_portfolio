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
            <Box>
                <Greeting />
            </Box>
            <Box>
                <AboutMe />
            </Box>
            <Box>
                <Experience />
            </Box>

            {/* <Box>
                <ProjectContainer />
            </Box>

            <Box>
                <ContactMe />
            </Box>

            <Box>
                <Footer />
            </Box> */}
        </>
    )
}
export default FullWebPage;