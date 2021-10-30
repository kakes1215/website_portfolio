import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Header, Nav } from 'grommet';
import { Github, Linkedin, MailOption, Codepen, Down } from 'grommet-icons';


function SocialMediaLinks() {
    return (
        <>
            <Header background='neutral-2' height='auto' width='xsmall' fill>
                <Nav direction='column' pad='medium' focusIndicator='true' style={{ position: 'fixed' }}>
                    <Github color='accent-1' />
                    <Linkedin color='accent-1' />
                    <MailOption color='accent-1' />
                    <Codepen color='accent-1' />
                </Nav>
            </Header>
        </>
    )
}
export default SocialMediaLinks;