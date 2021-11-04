import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid } from 'grommet';
import { grommet } from 'grommet/themes';
import ProjectCard from './ProjectCard';

function ProjectContainer() {
    const projects = [
        {
            name: 'Name of Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam tempor ante, nec ullamcorper metus cursus quis. Mauris at tellus arcu. Integer hendrerit tristique turpis, a tempor mauris posuere eu.',
            image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
        },
        {
            name: 'Name of Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam tempor ante, nec ullamcorper metus cursus quis. Mauris at tellus arcu. Integer hendrerit tristique turpis, a tempor mauris posuere eu.',
            image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
        },
        {
            name: 'Name of Project',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquam tempor ante, nec ullamcorper metus cursus quis. Mauris at tellus arcu. Integer hendrerit tristique turpis, a tempor mauris posuere eu.',
            image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'
        },
    ]

    const listProjects = projects.map((project) =>
        <ProjectCard project={project} />
    );

    return (
        <>
            <Grommet theme={grommet} full>
                <Box pad='large' fill>
                    <Box background='neutral-2' pad='medium'>
                        <Text size='4xl' color='accent-2'>Projects</Text>
                    </Box>
                    <Box direction='row'>
                        {listProjects}
                    </Box>
                </Box>
            </Grommet>

        </>

    )
}

export default ProjectContainer