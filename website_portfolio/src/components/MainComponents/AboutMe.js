import React, { } from 'react';
import { Paragraph, Box, Text, Grid, Image } from 'grommet';
import aboutMePicture from '../../images/aboutme.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function AboutMe() {
    return (
        <>
            <Fade bottom>
                <Box background='brand' round='medium'>
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
                                height='medium'
                                width='70%'
                                background='neutral-2'
                                round='large'
                                pad='medium'
                                style={{ marginLeft: '10%', marginTop: '5%' }}>
                                <Text size='4xl' color='accent-2'>About Me</Text>
                                <Paragraph size='xlarge'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet erat risus.
                                    Donec malesuada orci et nibh pharetra, ac egestas purus congue.
                                </Paragraph>
                            </Box>
                        </Slide>
                        <Slide right>
                            <Box gridArea="aboutMePicture" style={{ height: '95%', width: '95%', paddingLeft: '1%', paddingRight: '15%', paddingTop: '5%' }}>
                                <Image src={aboutMePicture} fit='cover' />
                            </Box>
                        </Slide>
                    </Grid>
                </Box>
            </Fade>
        </>
    )
}

export default AboutMe