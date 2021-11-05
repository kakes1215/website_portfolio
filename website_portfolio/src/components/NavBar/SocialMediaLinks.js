import React, { } from 'react';
import { Header, Nav } from 'grommet';
import { Github, Linkedin, MailOption, Codepen } from 'grommet-icons';


function SocialMediaLinks() {
    return (
        <>
            <Header>
                <Nav direction='column' pad='medium' style={{ position: 'fixed', top: 360 }}>
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