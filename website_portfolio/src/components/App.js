import React, { } from 'react';
import { Grommet, Box, Grid, Stack } from 'grommet';
import FullWebPage from './FullWebPage';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import Background from './Background';
import Greeting from './MainComponents/Greeting';
import MainNavBar from './NavBar/MainNavBar'

function App() {
  return (
    <Grommet full>
      <Stack center='align'>
        <Box background='neutral-2'>
          <Background />
        </Box>

        <Grid
          rows={['5%', 'auto', 'auto', 'auto']}
          columns={['5%', 'auto']}
          areas={[
            ['mainNav', 'mainNav'],
            ['greeting', 'greeting'],
            ['socialMedia', 'fullWebPage'],
          ]}
          pad='none'
        >
          <Box gridArea='mainNav'>
            <MainNavBar />
          </Box>
          <Box gridArea='greeting'>
            <Greeting />
          </Box>
          <Box gridArea='socialMedia'>
            <SocialMediaLinks />
          </Box>
          <Box gridArea='fullWebPage'>
            <FullWebPage />
          </Box>
        </Grid>
      </Stack>
    </Grommet>
  );
}

export default App;
