import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Header, Nav } from 'grommet';
import { Github, Linkedin, MailOption, Codepen } from 'grommet-icons';


function SocialMediaLinks() {
    return (
        <>
            <Grommet theme={grommet} full>
                <Header background='neutral-2'>
                    <Nav direction='column' pad='medium'>
                        <Github color='accent-1' />
                        <Linkedin color='accent-1' />
                        <MailOption color='accent-1' />
                        <Codepen color='accent-1' />
                    </Nav>
                </Header>
            </Grommet>
        </>
    )
}
export default SocialMediaLinks;