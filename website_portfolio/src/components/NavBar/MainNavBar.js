import React, { } from 'react';
import { Header, Nav, Button } from 'grommet';

function MainNavBar() {
    return (
        <>
            <Header pad='small' justify='end' style={{ position: 'fixed', width: '100%', paddingRight: 40 }} background={{ color: 'neutral-2' }}>
                <Nav direction='row' focusIndicator='true' pad='small' >
                    <Button defualt href='#aboutMe' label="About Me" />
                    <Button defualt href='#experience' label="Experience" />
                    <Button defualt href='#projects' label="Projects" />
                    <Button defualt href='#contactMe' label="Contact Me" />
                    <Button primary href='https://docs.google.com/document/d/18dwBQxHXPvSpnx1DqwOkToMm1QSgtxqK/edit?usp=sharing&ouid=102586897046437747331&rtpof=true&sd=true' label="Resume" />
                </Nav>
            </Header>
        </>
    )
}
export default MainNavBar;