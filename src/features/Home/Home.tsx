import React from 'react';
import Grid from '@mui/material/Grid/Grid';
import { HeroSection } from './components/HeroSection';

const Home: React.FC = () => {
  console.log('Hiiii');
  return (
    <Grid container justifyContent="space-between">
      <HeroSection />
    </Grid>
  );
};

export default Home;
