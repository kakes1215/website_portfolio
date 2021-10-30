import React, { } from 'react';

import { Grommet, Paragraph, Box, Text, Grid, Main } from 'grommet';
import { grommet } from 'grommet/themes';

import FullWebPage from './FullWebPage';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';


function App() {
  return (
    <>
      <Box background='neutral-2'>
        <Grid
          rows={['xsmall', 'auto']}
          columns={['xsmall', 'auto']}
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

    </>
  );
}

export default App;
