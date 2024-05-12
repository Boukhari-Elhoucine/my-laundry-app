import Grid from '@mui/material/Grid/Grid';
import { PrimaryButton } from 'shared/components';

export const HeroSection = () => {
  return (
    <Grid item container direction="column" xs={3}>
      <PrimaryButton>0% discount for 1 month subscription</PrimaryButton>
    </Grid>
  );
};
