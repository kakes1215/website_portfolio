import React, { } from 'react';
import { Paragraph, Box, Text, Grid, Image } from 'grommet';
import aboutMePicture from '../../static/images/aboutme.jpg';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function AboutMe() {
    return (
        <>
            <Box height={{ min: '100vh' }} align='center' background={{ color: 'accent-2', opacity: 'medium' }}>
                <Fade bottom>
                    <Box background='brand' round='medium' align='center' margin={{ top: 'xlarge' }}>
                        <Text size='4xl' color='accent-2'>About Me</Text>
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
                                    <Paragraph size='xlarge'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet erat risus.
                                        Donec malesuada orci et nibh pharetra, ac egestas purus congue. Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Fusce tristique laoreet nisl, id maximus nisi. Nam sed varius
                                        eros, et euismod erat. Vivamus tincidunt dapibus volutpat. Etiam dictum malesuada libero at fringilla.
                                        Maecenas cursus, mauris ut commodo porta, tellus arcu aliquet tellus, quis vestibulum orci velit ac nibh.
                                    </Paragraph>
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