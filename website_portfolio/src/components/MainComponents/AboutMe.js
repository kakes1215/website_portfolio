import React, { } from 'react';
import { Paragraph, Box, Text, Grid, Image } from 'grommet';
import aboutMePicture from '../../static/images/aboutme.jpg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function AboutMe() {
    return (
        <>
            <Box height={{ min: '100vh' }} align='center' background={{ color: 'neutral-2' }} width='95%' margin={{left: "5%"}}>
                <Fade bottom>
                    <Box background='brand' round='medium' align='left' margin={{ top: 'xlarge' }}>
                        <Text size='4xl' color='accent-2' style={{ paddingLeft: '5vh', paddingTop: '2vh' }}>About Me</Text>
                        <Grid
                            rows={['100%']}
                            columns={['3/4', '1/4']}
                            areas={[
                                ['aboutMeWords', 'aboutMePicture'],
                            ]}
                            pad='none'
                        >
                            <Slide left>
                                <Box
                                    gridArea="aboutMeWords"
                                    height='auto'
                                    width='70%'
                                    background={{ color: 'accent-1', opacity: 'strong' }}
                                    round='large'
                                    pad='medium'
                                    style={{ marginLeft: '10%', marginTop: '5%' }}>
                                    <Paragraph>
                                       Hello! My name is Kaylynn Diaz-Schott and I enjoy developing new and interesting things for the internet. My interest in software development started with my first
                                       python class and then subsequently my first student development job. 
                                    </Paragraph>
                                    <Paragraph>
                                        Fast forward to today and I have worked with Full Stack development team, frontend development, web security testing, managed work as a scrum master, and managed implementation of various projects.
                                        My main focus is to continioully improve my skills and experience and be able to use my creativity to develop solutions for various scenarios. 
                                    </Paragraph>
                                    <Paragraph>
                                        Here are a few technologies that I have been working with recently:
                                    </Paragraph>
                                    <Box direction='row'>
                                    <ul>
                                        <li>JavaScript</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                    </ul>
                                    <ul>
                                        <li>Python</li>
                                        <li>Django</li>
                                        <li>GraphQL</li>
                                    </ul>
                                    </Box>
                                </Box>
                            </Slide>
                            <Slide right>
                                <Box gridArea="aboutMePicture" style={{ height: '95%', width: '95%', paddingLeft: '1%', paddingRight: '15%' }}>
                                    <Image src={aboutMePicture} fit='cover' />
                                </Box>
                            </Slide>
                        </Grid>
                    </Box>
                </Fade>
            </Box>
        </>
    )
}

export default AboutMe