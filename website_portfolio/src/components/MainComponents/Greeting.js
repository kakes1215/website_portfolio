import React, { } from 'react';
import { Paragraph, Box, Text, Grid } from 'grommet';
import { Down } from 'grommet-icons';

function Greeting() {
    return (
        <>
            <Box pad='large'>
                <Grid
                    rows={['auto', 'auto', 'auto']}
                    columns={['auto']}
                    areas={[
                        ['helloText'],
                        ['nameText'],
                        ['introParagraph'],
                        ['downArrow']
                    ]}
                    pad='small'
                >
                    <Box pad='large'>
                        <Box gridArea='helloText' align="start">
                            <Text size="xlarge" color="accent-1">Hello, my name is</Text>
                        </Box>
                        <Box gridArea='nameText' align="start">
                            <Text size="5xl" color='accent-2'>Kaylynn</Text>
                            <Text size="5xl" color='#FFBCFF'>I develop web applications.</Text>
                        </Box>
                        <Box gridArea='introParagraph' align="start">
                            <Paragraph textAlign='start' color='accent-1' size='large'>
                                I'm an aspiring Software Engineer that specializes in Front End and Full Stack Development for web applications.
                            </Paragraph>
                        </Box>
                        <Box gridArea='downArrow' width='75%' animation={{ type: 'pulse', duration: 800 }} style={{ alignItems: 'center', paddingLeft: '20%' }}>
                            <Down color='accent-1' size='large' />
                            <Down color='accent-1' size='large' />
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </>
    )

}
export default Greeting