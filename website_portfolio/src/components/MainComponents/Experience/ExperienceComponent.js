import React, { } from 'react';
import { Box, Text, Grid } from 'grommet';
import ExperienceItem from './ExperienceItem';

function Experience() {
    const experiences = [
        {
            company: 'Company 1',
            title: 'Job Title 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum sollicitudin dui eget mi malesuada, fermentum ultricies metus posuere'
        },
        {
            company: 'Company 2',
            title: 'Job Title 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum sollicitudin dui eget mi malesuada, fermentum ultricies metus posuere'
        },
        {
            company: 'Company 3',
            title: 'Job Title 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum sollicitudin dui eget mi malesuada, fermentum ultricies metus posuere'
        }
    ]
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
                        {experiences.map((item) => (
                            <ExperienceItem experiences={item} />
                        ))}
                    </Box>
                </Grid>

            </Box>


        </>
    )
}
export default Experience;