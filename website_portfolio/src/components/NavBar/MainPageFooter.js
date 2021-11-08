import React, { } from 'react';
import { Text, Footer, Stack, Box } from 'grommet';
import Background from '../Background';

function MainPageFooter() {
    return (
        <Box background='brand'>
            <Footer margin='large' alignSelf='center'>
                <Text alignSelf='center' size='large'>Designed and Built by Kaylynn Diaz-Schott</Text>
            </Footer>
        </Box>
    )
}

export default MainPageFooter;