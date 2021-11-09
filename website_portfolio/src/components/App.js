import React, { } from 'react';
import { Grommet, Box, Grid } from 'grommet';
import FullWebPage from './FullWebPage';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import MainNavBar from './NavBar/MainNavBar'

function App() {
  return (
    <Grommet full>
      <Box>
        <Grid
          rows={['10vh', 'auto', 'auto']}
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
          <Box gridArea='socialMedia' background='neutral-2'>
            <SocialMediaLinks />
          </Box>
          <Box gridArea='fullWebPage'>
            <FullWebPage />
          </Box>
        </Grid>
      </Box>
    </Grommet >
  );
}

export default App;
