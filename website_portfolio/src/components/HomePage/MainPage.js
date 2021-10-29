import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Paragraph, Box, Text, Grid } from 'grommet';
import { Down } from 'grommet-icons';
import Greeting from './Greeting'


function MainPage() {
    return (
        <>
            <Grommet theme={grommet} full>
                <Box background={{ color: 'neutral-2' }} width='100%'>
                    <Grid
                        rows={['xsmall', 'flex', 'auto']}
                        columns={['xsmall', 'auto']}
                        areas={[
                            ['mainNav', 'mainNav'],
                            ['socialMedia', 'greeting'],
                        ]}
                        pad='large'
                    >
                        <Box gridArea='mainNav'>
                            Header
                        </Box>
                        <Box gridArea='socialMedia'>
                            Social Media Links
                        </Box>
                        <Box gridArea='greeting'>
                            <Greeting />
                        </Box>

                    </Grid>

                </Box>
            </Grommet>
        </>
    )
}
export default MainPage