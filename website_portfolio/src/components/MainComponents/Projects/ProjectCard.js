import React, { } from 'react';
import { Paragraph, Box, Card, CardBody, Heading, Button, CardFooter, Image } from 'grommet';

function ProjectCard(props, project) {

    return (
        <Box pad='medium' align='center'>
            <Card elevation='small' width='medium' background='accent-1'>
                <CardBody height='small'>
                    <Image
                        fit='cover'
                        src={props.project.image}
                        allyTitle={props.project.name}
                    />
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                    <Heading level="3" alignSelf='center' margin={{ vertical: 'medium' }}>
                        {props.project.name}
                    </Heading>
                    <Paragraph margin={{ top: 'none' }}>
                        {props.project.description}
                    </Paragraph>
                </Box>
                <CardFooter>
                    <Box direction="row" align="center" gap="medium" style={{ paddingLeft: '15%', paddingRight: '20%', paddingBottom: '10%', paddingTop: '10%' }}>
                        <Button
                            primary
                            color='accent-2'
                            background='accent-2'
                            label='Demo'
                            size='large'
                        />
                        <Button
                            primary
                            color='accent-2'
                            hoverIndicator
                            label='Github'
                            size='large'
                        />
                    </Box>

                </CardFooter>
            </Card>

        </Box>
    )
}
export default ProjectCard