import React, { } from 'react';
import { Box, Text, Form, FormField, TextInput, Button, TextArea } from 'grommet';

function ContactMe() {
    return (
        <Box >
            <Box>
                <Text size='4xl' color='accent-2'>Contact Me</Text>
            </Box>
            <Box align="center" pad="large">
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
    )
}

export default ContactMe