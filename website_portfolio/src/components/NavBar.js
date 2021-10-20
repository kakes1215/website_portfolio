import React from 'react';
import { Pane, Menu } from 'evergreen-ui'

function NavBar() {

    return (
        <>
            <Pane position="fixed" right={0} top="40%">
                <Menu.Item>Skills</Menu.Item>
                <Menu.Item>About Me</Menu.Item>
                <Menu.Item>Projects</Menu.Item>
                <Menu.Item>Resume</Menu.Item>
                <Menu.Item>Contact</Menu.Item>
            </Pane>

        </>
    );

}
export default NavBar