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
    const Media = () => (
        <Box direction="row" gap="xxsmall" justify="center">
            <Anchor
                a11yTitle="Share feedback on Github"
                href="https://www.instagram.com/"
                icon={<Instagram color="brand" />}
            />
            <Anchor
                a11yTitle="Chat with us on Slack"
                href="https://www.facebook.com/"
                icon={<FacebookOption color="brand" />}
            />
            <Anchor
                a11yTitle="Follow us on Twitter"
                href="https://twitter.com/"
                icon={<Twitter color="brand" />}
            />
        </Box>
    );

    return (
        <>
            <Grommet theme={grommet}>
                <Footer background="neutral-2" fill>
                    <Text alignSelf='right'>Designed and Built by Kaylynn Diaz-Schott</Text>
                </Footer>
            </Grommet>

        </>

    )
}

export default MainPageFooter;