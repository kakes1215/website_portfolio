import React from 'react';
import { Pane, Heading } from 'evergreen-ui'
import MainNavBar from './NavBar';
import ComputerImage from '../images/computer.jpg'

function ShowGreeting() {

    return (
        <>
            <Pane display="flex" width="100%" paddingLeft="30%" paddingBottom="5%" position="fixed">
                <MainNavBar />
            </Pane>
            <Pane display="flex">
                <Pane margin={15} height={300} width="40%" align="left">
                    <Heading paddingTop={100} paddingBottom={25} size={900}>
                        About Me
                    </Heading>
                    <Heading width="90%" size={500}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum commodo interdum quam, nec pretium felis congue quis. consectetur adipiscing elit.
                    </Heading>
                </Pane>
                <Pane paddingLeft={60} width="40%">
                    <img height="100%" width="100%" src={ComputerImage} alt="computer_graphic" />
                </Pane>
            </Pane>

        </>

    )
}

export default ShowGreeting