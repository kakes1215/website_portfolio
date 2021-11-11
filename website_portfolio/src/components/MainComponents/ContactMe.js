import React, { } from 'react';
import { Box, Text, Button } from 'grommet';
import Fade from 'react-reveal/Fade';

function ContactMe() {
    return (
        <Box background='neutral-2' height={{ min: '100vh' }}>
            <Fade bottom delay={300}>
                <Box background='accent-2' width='75%' round='large' pad={{ bottom: 'large' }} margin={{ left: '20vh', top: 'xlarge' }}>
                    <Box>
                        <Text size='4xl' color='neutral-2' alignSelf='center' margin='large'>Contact Me</Text>
                    </Box>
                    <Box background='accent-1' pad='large' width='80%' alignSelf='center' round='large'>
                        <Box pad='small'>
                            <Text size='large'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique laoreet nisl,
                                id maximus nisi. Nam sed varius eros, et euismod erat. Vivamus tincidunt dapibus volutpat.
                                Etiam dictum malesuada libero at fringilla. Maecenas cursus, mauris ut commodo porta,
                                tellus arcu aliquet tellus, quis vestibulum orci velit ac nibh. Aenean eget justo tellus.
                            </Text>
                        </Box>
                        <Box pad='small' width='25%' alignSelf='center'>
                            <Button
                                primary
                                size='large'
                                label='Email Me!'
                                href='mailto:kdiazs1215@gmail.com'
                                alignSelf='center'
                            />
                        </Box>
                    </Box>
                </Box>
            </Fade >
        </Box>
    )
}

export default ContactMe;