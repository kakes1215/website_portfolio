import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Main, Footer, Anchor } from 'grommet';
import { grommet } from 'grommet/themes';
import {
    Grommet as GrommetIcon,
    FacebookOption,
    Instagram,
    Twitter,
} from 'grommet-icons';

function MainPageFooter() {
    return (
        <>
            <Grommet theme={grommet}>
                <Footer>
                    <Text alignSelf='right'>Designed and Built by Kaylynn Diaz-Schott</Text>
                </Footer>
            </Grommet>

        </>

    )
}

export default MainPageFooter;