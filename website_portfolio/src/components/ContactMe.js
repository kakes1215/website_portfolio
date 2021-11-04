import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Form, FormField, TextInput, Button, TextArea } from 'grommet';
import { grommet } from 'grommet/themes';

function ContactMe() {


    return (
        <>
            <Grommet theme={grommet}>
                <Box >
                    <Box background='neutral-2' pad='medium'>
                        <Text size='4xl' color='accent-2'>Contact Me</Text>
                    </Box>
                    <Box align="center" pad="large" background='neutral-2'>
                        <Form>
                            <FormField
                                name="firstName"
                                htmlFor="firstName"
                                label="First Name"
                                required
                            >
                                <TextInput id="firstName" name="firstName" />
                            </FormField>
                            <FormField
                                name="lastName"
                                htmlFor="lastName"
                                label="Last Name"
                                required
                            >
                                <TextInput id="lastName" name="lastName" />
                            </FormField>
                            <FormField name="email" htmlFor="email" label="Email" required>
                                <TextInput id="email" name="email" type="email" />
                            </FormField>
                            <FormField name="message" htmlFor="message" label="Message" required>
                                <TextArea id="message" name="Message" />
                            </FormField>
                            <Button type="submit" label="Submit" primary />
                            <Text margin={{ left: 'small' }} size="small" color="status-critical">
                                * Required Field
                            </Text>
                        </Form>
                    </Box>
                </Box>
            </Grommet>

        </>

    )
}

export default ContactMe