import React, { } from 'react';
import { Grommet, Stack, Main, Header, Sidebar, Box, Text, Footer } from 'grommet';
import Greeting from './MainComponents/Greeting';
import AboutMe from './MainComponents/AboutMe';
import Experience from './MainComponents/Experience/ExperienceComponent';
import ProjectContainer from './MainComponents/Projects/ProjectContainer';
import ContactMe from './MainComponents/ContactMe';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import MainPageFooter from './NavBar/MainPageFooter';

function FullWebPage() {
    return (
        <>
            <Grommet full>
                <Stack>
                    <Box>
                        <Main background='neutral-2'>
                            <section id='greeting'>
                                <Greeting />
                            </section>
                            <section id='aboutMe'>
                                <AboutMe />
                            </section>
                            <section id='experience'>
                                <Experience />
                            </section>
                            <section id='projects'>
                                <ProjectContainer />
                            </section>
                            <section id='contact'>
                                <ContactMe />
                            </section>
                        </Main>
                        <Footer background="brand" justify="center" pad="medium">
                            <MainPageFooter />
                        </Footer>

                    </Box>
                    <Box>
                        <Header
                            style={{ position: 'fixed', top: 0, right: 0 }}
                            pad='small'
                            justify='end'
                            background={{ color: 'neutral-2', opacity: 'strong' }}
                            width='stretch'
                        >
                            <MainNavBar />
                        </Header>
                        <Sidebar
                            style={{ position: 'fixed', top: 500, left: 0 }}
                            width='5%'
                            height={{ min: '100%' }}
                            background={{ color: 'neutral-2', opacity: 'strong' }}
                        >
                            <SocialMediaLinks />
                        </Sidebar>
                    </Box>
                </Stack>
                {/* <Footer margin='large' alignSelf='center' pad='large' height='1000000px'>
                    <Footer />
                </Footer> */}
            </Grommet>
        </>
    )
}
export default FullWebPage;