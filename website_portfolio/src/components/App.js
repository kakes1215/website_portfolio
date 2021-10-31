import React, { } from 'react';

import { Grommet, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';

import FullWebPage from './FullWebPage';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import Greeting from './HomePage/Greeting';


function App() {
  return (
    <>
      <Box background='neutral-2'>
        <Grid
          rows={['1/4', 'auto']}
          columns={['1/4', '3/4']}
          areas={[
            ['mainNav', 'mainNav'],
            ['socialMedia', 'fullWebPage'],
          ]}
          pad='none'
        >
          <Box gridArea='mainNav'>
            <MainNavBar />
          </Box>
          <Box gridArea='socialMedia' >
            <SocialMediaLinks />

          </Box>
          <Box gridArea='fullWebPage' >
            <Greeting />

          </Box>
        </Grid>

      </Box>

    </>
  );
}

export default App;
