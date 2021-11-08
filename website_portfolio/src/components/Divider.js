import React, { } from 'react';
import { Box } from 'grommet';
import Fade from 'react-reveal/Fade';

function Divider() {
    return (
        <>
            <Fade bottom>
                <Box background='red' size='large'>
                </Box>
            </Fade>
            <Fade top>
                <Box background='accent-1' width='small' />
            </Fade>
        </>
    )
};
export default Divider;