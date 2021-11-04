import React from 'react';
import { Pane, Heading, Text } from 'evergreen-ui'

function Project() {
    return (
        <>
            <Heading marginTop={150} marginBottom={25} size="800">
                Projects
            </Heading>
            <Pane>
                <Pane
                    display="flex"
                    flexDirection="column"
                    float="left"
                    marginLeft={200}
                    marginRight={200}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading size="800">
                        Project Title
                    </Heading>
                    <Text>
                        Summary
                    </Text>
                </Pane>
                <Pane
                    display="flex"
                    flexDirection="column"
                    float="left"
                    marginLeft={200}
                    marginRight={200}
                    justifyContent="center"
                    alignItems="center"

                >
                    <Heading>Embed Project Here</Heading>

                </Pane>
            </Pane>
        </>
    )
}
export default Project