import React, { } from 'react';
import { Paragraph, Box, Text, Grid } from 'grommet';
import aboutMePicture from '../../images/aboutme.jpg'

function AboutMe() {
    return (
        <>
            <Box>
                <Grid
                    rows={['auto']}
                    columns={['1/2', '1/2']}
                    areas={[
                        ['aboutMeWords', 'aboutMePicture'],
                    ]}
                    pad='none'
                >
                    <Box pad='large' gridArea="aboutMeWords">
                        <Text size='4xl' color='accent-2'>About Me</Text>
                        <Paragraph size='xlarge'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet erat risus.
                            Donec malesuada orci et nibh pharetra, ac egestas purus congue.
                        </Paragraph>
                    </Box>
                    <Box pad='large' gridArea="aboutMePicture" align='center' >
                        <img alt='person' height='500px' width='300px' src={aboutMePicture} />
                    </Box>
                </Grid>
            </Box>
        </>
    )
}

export default AboutMe