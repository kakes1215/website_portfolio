import React, { } from 'react';
import Greeting from './HomePage/Greeting';
import AboutMe from './AboutMe';
import Divider from './Divider';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Experience from './Experience';
import { Box } from 'grommet';
import ProjectContainer from './Projects/ProjectContainer';



function FullWebPage() {
    return (
        <>
            <div>
                <Greeting />
            </div>
            <div>
                <AboutMe />
            </div>
            <div>
                <Experience />
            </div>
            <div>
                <ProjectContainer />
            </div>

        </>

    )
}

export default FullWebPage;