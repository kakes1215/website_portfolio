import React, { } from 'react';
import { Text, Footer, Box } from 'grommet';

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