import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Card, CardBody, Heading, Button, CardFooter, Image, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';


function ProjectCard(props, project) {

    return (
        <Grommet theme="grommet" full>
            <Box pad='medium' align='start' background='neutral-2' fill>
                <Card elevation='medium' width='medium'>
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
                        <Box direction="row" align="center" gap="medium">
                            <Button
                                hoverIndicator
                                onClick={() => {
                                }}
                            />
                            <Button hoverIndicator />

                        </Box>

                    </CardFooter>
                </Card>

            </Box>
        </Grommet>
    )
}
export default ProjectCard