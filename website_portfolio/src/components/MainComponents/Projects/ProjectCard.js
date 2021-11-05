import React, { } from 'react';
import { Paragraph, Box, Card, CardBody, Heading, Button, CardFooter, Image } from 'grommet';

function ProjectCard(props, project) {

    return (
        <Box pad='medium' align='start'>
            <Card elevation='medium' width='medium' background='accent-1'>
                <CardBody height='small'>
                    <Image
                        fit='cover'
                        src={props.project.image}
                        allyTitle={props.project.name}
                    />
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                    <Heading level="3" margin={{ vertical: 'medium' }}>
                        {props.project.name}
                    </Heading>
                    <Paragraph margin={{ top: 'none' }}>
                        {props.project.description}
                    </Paragraph>
                </Box>
                <CardFooter>
                    <Box direction="row" align="center" gap="medium" style={{ paddingLeft: '20%', paddingRight: '20%', paddingBottom: '10%', paddingTop: '10%' }}>
                        <Button
                            primary
                            hoverIndicator
                            onClick={() => { }}
                            label='Demo'
                        />
                        <Button hoverIndicator
                            primary
                            label='Github'
                        />
                    </Box>

                </CardFooter>
            </Card>

        </Box>
    )
}
export default ProjectCard