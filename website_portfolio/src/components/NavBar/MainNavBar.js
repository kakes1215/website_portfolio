import React, { } from 'react';
import { Header, Nav, Button } from 'grommet';


function MainNavBar() {
    return (
        <>
            <Header justify='end' pad='large'>
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