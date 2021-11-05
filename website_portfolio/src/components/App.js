import React, { } from 'react';
import { Grommet, Box, Grid, Stack } from 'grommet';
import FullWebPage from './FullWebPage';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import ParticlesBg from 'particles-bg'
import { Code } from 'grommet-icons';
function App() {
  return (
    <Grommet full>
      <Stack center='align'>
        <ParticlesBg
          type='circle'
          num={100}
        />

        <Grid
          rows={['auto', 'auto', 'auto']}
          columns={['5%', 'auto']}
          areas={[
            ['mainNav', 'mainNav'],
            ['socialMedia', 'fullWebPage'],
            ['footer', 'footer']
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
      </Stack>
    </Grommet>
  );
}

export default App;
