import React from 'react';
import { CssBaseline, Container } from '@material-ui/core/';

import Navbar from './Navbar';
import GrowthChart from './GrowthChart';
import AboutChart from './AboutChart';

const App = () => {
  return (
    <>
      <CssBaseline>
        {/* <Navbar /> */}
        <h1 style={{ textAlign: 'center' }}>SCV Covid-19 Tracker</h1>
        <Container fixed>
          <GrowthChart />
          <AboutChart />
        </Container>
      </CssBaseline>
    </>
  );
};

export default App;
