import React, { } from 'react';
import { Box, Text, Accordion, AccordionPanel, Grid } from 'grommet';

function Experience() {
    return (
        <>
            <Box pad='small' >
                <Grid
                    rows={['auto']}
                    columns={['1/4', '3/4']}
                    areas={[
                        ['title', 'jobHistory'],
                    ]}
                    pad='medium'
                >
                    <Box
                        gridArea='title'
                        background={{ color: 'accent-2', opacity: '80%' }}
                    >
                        <Text
                            size='2xl'
                            color='white'
                            weight='bolder'
                            margin='medium'
                            alignSelf='start'
                        >
                            Experience
                        </Text>

                    </Box>
                    <Box gridArea='jobHistory'>
                        {[1, 2, 3, 4, 5].map((number) => (
                            <Accordion>
                                <AccordionPanel
                                    background='brand'
                                    pad='small'
                                    label={
                                        <div>
                                            <Text
                                                weight='bolder'
                                                color='accent-1'
                                                size='large'
                                                margin='small'>
                                                Company</Text>
                                            <Text
                                                color='white'
                                                size='medium'>
                                                Job Title
                                            </Text>
                                        </div>
                                    }
                                    border={{ color: 'accent-3', side: 'bottom' }}>
                                    <Box pad='medium' background={{ color: 'accent-2', opacity: '40%' }} >
                                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum sollicitudin dui eget mi malesuada, fermentum ultricies metus posuere.</Text>
                                        <ul>
                                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                            <li>Curabitur et ante euismod, suscipit sem sed, malesuada metus.</li>
                                            <li>Curabitur et ante euismod, suscipit sem sed, malesuada metus.</li>
                                        </ul>

                                    </Box>
                                </AccordionPanel>
                            </Accordion>

                        ))}



                    </Box>
                </Grid>

            </Box>


        </>
    )
}
export default Experience;