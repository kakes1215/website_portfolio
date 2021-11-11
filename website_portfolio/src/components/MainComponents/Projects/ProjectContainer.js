import React, { } from 'react';
import { Box, Carousel, Text } from 'grommet';
import ProjectCard from './ProjectCard';
import Fade from 'react-reveal/Fade';

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
    ];


    const listProjects = projects.map((project) =>
        <ProjectCard project={project} />
    );


    return (
        <>
            <Box background='neutral-2' height={{ min: '100vh' }} width='90%' margin={{ left: 'xlarge' }}>
                <Fade bottom delay={300}>
                    <Box background={{ color: 'brand' }} round='large' pad={{ left: 'large', top: 'medium' }}>
                        <Box>
                            <Text size='4xl' color='accent-2'>Projects</Text>
                        </Box>
                        <Carousel alignSelf='center' pad='medium'>
                            <Box direction='row'>
                                {listProjects}
                            </Box>
                        </Carousel>
                    </Box>
                </Fade>
            </Box>
        </>
    )
}

export default ProjectContainer