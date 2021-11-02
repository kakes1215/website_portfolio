import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Header, Nav, Button } from 'grommet';


function MainNavBar() {
    return (
        <>
            <Header background='neutral-2' justify='end' pad='large' width='auto'>
                <Nav direction='row' focusIndicator='true' pad='medium' style={{ position: 'fixed' }}>
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