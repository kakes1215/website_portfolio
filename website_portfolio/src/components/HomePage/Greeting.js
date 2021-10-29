import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Paragraph, Box, Text, Grid } from 'grommet';
import { Down } from 'grommet-icons';


function Greeting() {
    return (
        <Grommet theme={grommet} full>
            <Box background={{ color: 'neutral-2' }} width='100%'>
                <Grid
                    rows={['auto', 'flex', 'flex']}
                    columns={['auto']}
                    areas={[
                        ['helloText'],
                        ['nameText'],
                        ['introParagraph'],
                    ]}
                    pad='large'
                >
                    <Box gridArea='helloText' align="start">
                        <Text size="xlarge" color="accent-1">Hello, my name is</Text>
                    </Box>
                    <Box gridArea='nameText' align="start" >
                        <Text size="5xl" color='accent-2'>Kaylynn</Text>
                        <Text size="5xl" color='#FFBCFF'>I develop web applications.</Text>
                    </Box>
                    <Box gridArea='introParagraph' align="start">
                        <Paragraph textAlign='start' color='accent-1'>
                            I'm a aspiring Software Engineer that specializes in Front End and Full Stack Development for web applications.
                        </Paragraph>
                    </Box>
                </Grid>
                <Box gridArea='downArrow' animation={{ type: 'pulse', duration: 1000 }} align='center' pad='small' margin='medium'>
                    <Down color='accent-1' size='large' />
                    <Down color='accent-1' size='large' />
                </Box>
            </Box>
        </Grommet >

    )

}
export default Greeting