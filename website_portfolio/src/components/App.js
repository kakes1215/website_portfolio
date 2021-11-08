import React, { } from 'react';
import { Grommet, Box, Grid, Stack } from 'grommet';
import FullWebPage from './FullWebPage';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import MainNavBar from './NavBar/MainNavBar'
import Background from './Background';

function App() {
  return (
    <Grommet full>
      <Stack>
        <Box background='neutral-2' fill>
          <Background />
        </Box>
        <Box>
          <Grid
            rows={['5%', 'auto', 'auto']}
            columns={['5%', 'auto']}
            areas={[
              ['mainNav', 'mainNav'],
              ['socialMedia', 'fullWebPage'],
            ]}
            pad='none'
          >

            <Box gridArea='mainNav'>
              <MainNavBar />
            </Box>
            <Box gridArea='socialMedia'>
              <SocialMediaLinks />
            </Box>
            <Box gridArea='fullWebPage'>
              <FullWebPage />
            </Box>
          </Grid>
        </Box>
      </Stack>
    </Grommet >
  );
}

export default App;
