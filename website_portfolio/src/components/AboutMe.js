import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import { Pane, Heading } from 'evergreen-ui'
import aboutMePicture from '../images/aboutme.jpg'

function AboutMe() {

    return (
        <>
            <Grommet theme={grommet}>
                <Box>
                    <Grid
                        rows={['auto']}
                        columns={['1/2', '1/2']}
                        areas={[
                            ['aboutMeWords', 'aboutMePicture'],
                        ]}
                        pad='none'
                    >
                        <Box gridArea="aboutMeWords" background='neutral-2'>
                            <Text size='4xl' color='accent-2'>About Me</Text>
                            <Paragraph size='xlarge'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet erat risus.
                                Donec malesuada orci et nibh pharetra, ac egestas purus congue.
                            </Paragraph>
                        </Box>
                        <Box gridArea="aboutMePicture" align='center' background='neutral-2'>
                            <img height='500px' width='300px' src={aboutMePicture} />
                        </Box>


                    </Grid>
                </Box>
            </Grommet>

        </>

    )
}

export default AboutMe