import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Card, CardBody, Heading, Button, CardFooter, Image, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';


function ProjectCard(props, project) {

    return (
        <Grommet theme="grommet" full>
            <Box pad='medium' align='start' fill background='neutral-2'>
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
        </Grommet>
    )
}
export default ProjectCard