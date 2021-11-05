import React, { } from 'react';
import { Header, Nav, Button } from 'grommet';


function MainNavBar() {
    return (
        <>
            <Header pad='small' background={{ color: 'neutral-2', opacity: 'medium' }} style={{ position: 'fixed', right: 10 }} width='100%' justify='end'>
                <Nav direction='row' focusIndicator='true' pad='small' >
                    <Button defualt label="About Me" />
                    <Button defualt label="Experience" />
                    <Button defualt label="Projects" />
                    <Button defualt label="Contact Me" />
                    <Button primary label="Resume" />
                </Nav>
            </Header>
        </>
    )
}
export default MainNavBar;