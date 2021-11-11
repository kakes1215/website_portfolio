import React, { } from 'react';
import { Paragraph, Box, Card, CardBody, Heading, CardFooter, Image, Anchor, Button } from 'grommet';
import { FormNext} from 'grommet-icons';

function ProjectCard(props, project) {

    return (
        <Box pad='small' align='center'>
            <Card elevation='small' width='300px' background='accent-1'>
                <CardBody height='small'>
                    <Image
                        fit='cover'
                        src={props.project.image}
                        allyTitle={props.project.name}
                    />
                </CardBody>
                <Box pad={{ horizontal: 'medium' }} responsive={false}>
                    <Heading level="3" alignSelf='center' margin={{ vertical: 'medium' }} color='neutral-2'>
                        {props.project.name}
                    </Heading>
                    <Paragraph margin={{ top: 'none' }} textAlign='center'>
                        {props.project.description}
                    </Paragraph>
                </Box>
                <CardFooter>
                    <Box direction="row" pad={{ left: '5%', top: '5%', bottom:'10%', right:'10%'}} margin='small'>
                        <Button
                            primary
                            hoverIndicator={{color: 'accent-1'}}
                            href="#"
                            color='accent-2'
                            background='accent-2'
                            label='Demo'
                            size='medium'
                            pad='xlarge'
                            margin='small'
                        />
                        <Button
                            primary
                            color='accent-2'
                            hoverIndicator ={{color: 'accent-1'}}
                            label='Github'
                            size='medium'
                            pad='xlarge'
                            margin='small'

                        />
                    </Box>

                </CardFooter>
            </Card>

        </Box>
    )
}
export default ProjectCard