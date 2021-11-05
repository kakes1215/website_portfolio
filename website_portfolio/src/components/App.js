import React, { } from 'react';
import { Box, Grid } from 'grommet';
import FullWebPage from './FullWebPage';
import MainNavBar from './NavBar/MainNavBar';
import SocialMediaLinks from './NavBar/SocialMediaLinks';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
