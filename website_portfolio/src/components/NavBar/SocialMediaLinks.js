import React, { } from 'react';
import { Grommet, Header, Nav } from 'grommet';
import { grommet } from 'grommet/themes';
import { Github, Linkedin, MailOption, Codepen } from 'grommet-icons';


function SocialMediaLinks() {
    return (
        <>
            <Header>
                <Nav direction='column' pad='medium' style={{ position: 'fixed', top: 360, height: '100%' }}>
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