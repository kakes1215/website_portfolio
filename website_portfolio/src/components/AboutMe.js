import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Main } from 'grommet';
import { grommet } from 'grommet/themes';
import { Pane, Heading } from 'evergreen-ui'
import ComputerImage from '../images/computer.jpg'

function AboutMe() {

    return (
        <>
            <Grommet theme={grommet}>
                <Box>
                    <Grid
                        rows={['auto']}
                        columns={['1/2', '1/2`']}
                        areas={[
                            ['aboutMeWords', 'aboutMePicture'],
                        ]}
                        pad='none'
                    >
                        <Box gridArea="aboutMeWords" background='brand'>
                            jsdlfkjsadk;fjdf
                        </Box>
                        <Box gridArea="aboutMePicture" background='grey'>
                            sdajf;lksdjfkl;sdajfsdk;ljf
                        </Box>


                    </Grid>
                </Box>
            </Grommet>

        </>

    )
}

export default AboutMe