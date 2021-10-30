import React, { } from 'react';
import Greeting from './HomePage/Greeting';
import AboutMe from './AboutMe';
import Divider from './Divider';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function FullWebPage() {
    return (
        <>
            <Parallax pages={2}>
                <ParallaxLayer offset={0} speed={1} >
                    <Greeting />
                </ParallaxLayer>
                <ParallaxLayer offset={.9} speed={2} >
                    <Divider />
                </ParallaxLayer>
                <ParallaxLayer offset={.95} speed={1}>
                    <AboutMe />
                </ParallaxLayer>
            </Parallax>
        </>
    );
}

export default FullWebPage;