import React, { } from 'react';

import { Grommet, Box, Grid, Main } from 'grommet';
import { grommet } from 'grommet/themes';

import FullWebPage from './FullWebPage';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';
import Greeting from './HomePage/Greeting';
import MainPageFooter from './MainPageFooter';


function App() {
  return (
    <>
      <Grommet theme="grommet">
        <Box background='neutral-2'>
          <Grid
            rows={['auto', 'flex', 'flex']}
            columns={['10%', 'flex']}
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
            <Box gridArea='socialMedia' >
              <SocialMediaLinks />

            </Box>
            <Box gridArea='fullWebPage' >
              <FullWebPage />
            </Box>
            <Box>
              <MainNavBar />
            </Box>
          </Grid>
        </Box>
      </Grommet>
    </>
  );
}

export default App;
