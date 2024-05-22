import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme/theme';

export const HeaderServices: React.FC = () => (
  <Box>
    <Typography
      variant="h5"
      color={theme.palette.primary.main}
      sx={{
        fontFamily: 'Grandstander',
        fontSize: '25px',
        fontWeight: 400,
        lineHeight: '24.94px',
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: '7px',
      }}
    >
      Services
    </Typography>
    <Typography
      variant="h2"
      sx={{
        fontFamily: 'Outfit',
        fontWeight: 500,
        lineHeight: '75.6px',
        textAlign: 'center',
      }}
    >
      Services & Packages
    </Typography>
  </Box>
);
