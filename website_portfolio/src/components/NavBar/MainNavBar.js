import React, { } from 'react';
import { grommet } from 'grommet/themes';
import { Grommet, Paragraph, Box, Text, Grid, Header, Nav, Button } from 'grommet';
import { Down } from 'grommet-icons';


function MainNavBar() {
    return (
        <>
            <Grommet theme={grommet} full>
                <Header background='neutral-2'>
                    <Nav direction='row-responsive' pad='small'>
                        <Button defualt label="About Me" />
                        <Button defualt label="Experience" />
                        <Button defualt label="Projects" />
                        <Button defualt label="Contact Me" />
                        <Button primary label="Resume" />
                    </Nav>
                </Header>
            </Grommet>
        </>
    )
}
export default MainNavBar;