import React, { } from 'react';
import { Nav, Button } from 'grommet';

function MainNavBar() {
    return (
        <>
            <Nav direction='row' focusIndicator='true' pad='small' >
                <Button defualt href='#aboutMe' label="About Me" />
                <Button defualt href='#experience' label="Experience" />
                <Button defualt href='#projects' label="Projects" />
                <Button defualt href='#contact' label="Contact Me" />
                <Button primary href='https://docs.google.com/document/d/18dwBQxHXPvSpnx1DqwOkToMm1QSgtxqK/edit?usp=sharing&ouid=102586897046437747331&rtpof=true&sd=true' label="Resume" />
            </Nav>
            =        </>
    )
}
export default MainNavBar;