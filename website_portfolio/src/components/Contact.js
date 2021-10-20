import React from 'react';
import { Pane, Heading, TextInputField, Button, toaster, Text } from 'evergreen-ui'

function Contact() {
    return (
        <>
            <Pane margin="15%" height="100%" width="60%" marginLeft={120}>
                <Pane
                    elevation={3}
                    float="left"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text>Github</Text>
                    <Text size={300}>Floating Panes</Text>
                </Pane>
                <Pane
                    elevation={3}
                    float="left"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text>LinkedIn</Text>
                    <Text size={300}>Floating Panes</Text>
                </Pane>
                <Pane
                    elevation={3}
                    float="left"
                    width={200}
                    height={120}
                    margin={24}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text>Email</Text>
                    <Text size={300}>Floating Panes</Text>
                </Pane>
            </Pane>
            <Pane marginTop={450}>
                <Heading height="100%" width="60%" marginLeft={120} size={800}>Send Message</Heading>
                <Pane align="left" backgroundColor="#d8dae5" height="100%" width="60%" marginLeft={120} paddingLeft={100} paddingTop={25} paddingBottom={25}>
                    <TextInputField
                        isInvalid
                        required
                        label="Name"
                        validationMessage="This field is required"
                        maxLength={60}
                        inputWidth="75%"
                    />
                    <TextInputField
                        isInvalid
                        required
                        label="Your Email"
                        validationMessage="This field is required"
                        maxLength={60}
                        inputWidth="75%"

                    />
                    <TextInputField
                        isInvalid
                        required
                        label="Your Phone Number"
                        validationMessage="This field is required"
                        maxLength={10}
                        inputWidth="75%"
                    />
                    <TextInputField
                        isInvalid
                        required
                        label="Subject"
                        validationMessage="This field is required"
                        maxLength={60}
                        inputWidth="75%"
                    />
                    <TextInputField
                        isInvalid
                        required
                        label="Message"
                        validationMessage="This field is required"
                        maxLength={300}
                        inputHeight={200}
                        inputWidth="90%"

                    />
                    <Button marginLeft="80%" onClick={() => toaster.success('Your message was sent!')}>Send</Button>

                </Pane>
            </Pane>

        </>
    )
}
export default Contact