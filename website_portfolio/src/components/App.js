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
      <Grommet theme="grommet" full>
        <Box background='neutral-2' fill>
          <Grid
            rows={['10%', '90%']}
            columns={['10%', '90%']}
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
              <FullWebPage />

            </Box>
          </Grid>

        </Box>

      </Grommet>

    </>
  );
}

export default App;
