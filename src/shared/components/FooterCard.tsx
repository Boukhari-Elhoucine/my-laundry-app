import { Stack, Typography } from '@mui/material';
import React from 'react';
import { PrimaryButton } from './Buttons';

interface FooterCardProps {
  price: number;
}

export const FooterCard: React.FC<FooterCardProps> = ({ price }) => (
  <Stack
    height="100%"
    justifyContent="flex-end"
    sx={{ margin: '0 24px 24px', fontFamily: 'Inter' }}
  >
    <Typography
      variant="h3"
      sx={{
        color: '#0B0914',
        fontFamily: 'inherit',
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: '40px',
      }}
    >
      {price} dollars{' '}
      <Typography
        variant="subtitle1"
        component="span"
        sx={{
          fontFamily: 'inherit',
          fontSize: '1.25rem',
          fontWeight: 400,
          lineHeight: '40px',
        }}
      >
        /per month
      </Typography>
    </Typography>

    <PrimaryButton
      sx={{
        height: '64px',
        marginTop: '24px',
        fontSize: '22px',
        borderRadius: '40px',
        textTransform: 'none',
        fontWeight: 600,
      }}
    >
      Choose
    </PrimaryButton>
  </Stack>
);
