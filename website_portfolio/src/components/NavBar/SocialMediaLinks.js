import React, { } from 'react';
import { Header, Nav, Button } from 'grommet';
import { Github, Linkedin, MailOption } from 'grommet-icons';

function SocialMediaLinks() {
    return (
        <>
            <Header style={{ position: 'fixed', bottom: 50 }} background={{ color: 'neutral-2' }}>
                <Nav direction='column'>
                    <Button
                        href='https://github.com/kakes1215'
                        hoverIndicator='accent-1'
                        icon={<Github size='medium' color='accent-2' />}
                    />
                    <Button
                        href='https://www.linkedin.com/in/kaylynndiazschott/'
                        hoverIndicator='accent-1'
                        icon={<Linkedin size='medium' color='accent-2' />}
                    />
                    <Button
                        href='mailto:kdiazs1215@gmail.com'
                        hoverIndicator='accent-1'
                        icon={<MailOption size='medium' color='accent-2' />}
                    />
                </Nav>
            </Header>
        </>
    )
}
export default SocialMediaLinks;