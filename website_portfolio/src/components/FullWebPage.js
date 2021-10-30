import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid } from 'grommet';
import { grommet } from 'grommet/themes';

import Greeting from './HomePage/Greeting';
import AboutMe from './AboutMe';
import Project from './Projects';
import Skills from './Skills';
import Contact from './Contact';


function FullWebPage() {
    return (
        <>
            <div>
                <Greeting />
            </div>
            <div>
                <AboutMe />
            </div>
            {/* <div>
                <Project />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Contact />
            </div> */}
        </>
    );
}

export default FullWebPage;