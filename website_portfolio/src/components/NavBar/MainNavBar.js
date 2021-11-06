import React, { } from 'react';
import { Header, Nav, Button } from 'grommet';

function MainNavBar() {
    return (
        <>
            <Header pad='small' justify='end' style={{ position: 'fixed', width: '100%', paddingRight: 40 }} background={{ color: 'neutral-2', opacity: 'strong' }}>
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