import React, { } from 'react';
import { Box, Text, Grid, Tabs, Tab } from 'grommet';
import ExperienceItem from './ExperienceItem';
import Fade from 'react-reveal/Fade';

function Experience() {

    const experiences = [
        {
            company: 'Company 1',
            color: 'accent1',
            title: 'Job Title 1',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin a id velit. Nam et varius nisl, 
            varius pellentesque orci. Suspendisse posuere risus at sagittis suscipit.`,
            listItems: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin'
            ]

        },
        {
            company: 'Company 2',
            color: 'accent2',
            title: 'Job Title 2',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin a id velit. Nam et varius nisl, 
            varius pellentesque orci. Suspendisse posuere risus at sagittis suscipit.`,
            listItems: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin'
            ]

        },
        {
            company: 'Company 3',
            color: 'accent3',
            title: 'Job Title 3',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin a id velit. Nam et varius nisl, 
            varius pellentesque orci. Suspendisse posuere risus at sagittis suscipit.`,
            listItems: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin'
            ]

        },
        {
            company: 'Company 4',
            color: 'accent4',
            title: 'Job Title 4',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin a id velit. Nam et varius nisl, 
            varius pellentesque orci. Suspendisse posuere risus at sagittis suscipit.`,
            listItems: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin'
            ]

        },
        {
            company: 'Company 5',
            color: 'accent5',
            title: 'Job Title 5',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin a id velit. Nam et varius nisl, 
            varius pellentesque orci. Suspendisse posuere risus at sagittis suscipit.`,
            listItems: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae urna et quam porttitor sollicitudin'
            ]

        },
    ]
    return (
        <>
            <Fade bottom>
                <Box gridArea='jobHistory' background={{ color: 'neutral-2' }} round='small' pad='medium'>
                    <Text size='4xl' color='accent-2'>Experience</Text>
                    <Tabs pad='medium'>
                        {experiences.map((job) => (
                            <Tab title={job.company} pad='large'>
                                <Box pad='large' background={{ color: 'brand', opacity: 'strong' }} round='large'>
                                    <Text size='large' weight='bold' color='accent-2'>{job.title} @ {job.company}</Text>
                                    <Text>{job.description}</Text>
                                    <ul>
                                        {job.listItems.map((item) => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </Tab>
                        ))}
                    </Tabs>
                </Box>
            </Fade>
        </>
    )
}
export default Experience;