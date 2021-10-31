import React, { } from 'react';
import Greeting from './HomePage/Greeting';
import AboutMe from './AboutMe';
import Divider from './Divider';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Experience from './Experience';
import { Box } from 'grommet';



function FullWebPage() {
    return (
        <div id='test1'>
            {/* <Box width='30px'>
                <Parallax pages={2}>
                    <ParallaxLayer offset={0} speed={0.5} >
                        <Greeting />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0} >
                        <Divider />
                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.5}>
                        <AboutMe />
                    </ParallaxLayer> */}
            {/* <ParallaxLayer offset={.99} speed={2} >
                    <Divider />
                </ParallaxLayer>
                <ParallaxLayer offset={1.1} speed={1}>
                    <Experience />
                </ParallaxLayer> */}

            {/* </Parallax> */}

            {/* </Box> */}

        </div>
    );
}

export default FullWebPage;