import React, { } from 'react';
import { Box } from 'grommet';
import AboutMe from './MainComponents/AboutMe';
import Experience from './MainComponents/Experience/ExperienceComponent';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import Footer from './NavBar/MainPageFooter';
import Greeting from './MainComponents/Greeting';
import Divider from './Divider';

function FullWebPage() {
    return (
        <>
            <Box>
                <Greeting />
            </Box>
            <Box>
                <Divider />
            </Box>
            <Box>
                <AboutMe />
            </Box>
            <Divider />
            <Box>
                <Experience />
            </Box>
            <Divider />
            <Box>
                <ProjectContainer />
            </Box>
            <Divider />
            <Box>
                <ContactMe />
            </Box>
            <Divider />
            <Box>
                <Footer />
            </Box>
        </>
    )
}
export default FullWebPage;