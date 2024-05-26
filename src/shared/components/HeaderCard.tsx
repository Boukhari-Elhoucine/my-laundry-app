import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme/theme';

interface HeaderCardProps {
  avatarSrc: string;
  titleHeader: string;
  subTitleHeader: string;
}

export const HeaderCardCopy: React.FC<HeaderCardProps> = ({
  avatarSrc,
  titleHeader,
  subTitleHeader,
}) => (
  <Box
    sx={{
      padding: '19px 24px 0px',
      marginBottom: '10px',
      display: 'grid',
      gridTemplateColumns: '54px auto',
      columnGap: '3px',
      gridTemplateRows: 'repeat(2, auto)',
      gridTemplateAreas: `
        "header main"
        ". footer"
      `,
    }}
  >
    <Box sx={{ gridArea: 'header' }}>
      <Avatar
        src={avatarSrc}
        alt="icon1"
        sx={{
          width: '54px',
          height: '46px',
        }}
      />
    </Box>
    <Box
      sx={{
        gridArea: 'main',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      <Typography
        variant="h4"
        fontFamily="Grandstander"
        textTransform="uppercase"
        fontSize="30px"
        fontWeight={600}
        color={theme.palette.primary.main}
      >
        {titleHeader}
      </Typography>
    </Box>
    <Box sx={{ gridArea: 'footer' }}>
      <Typography variant="subtitle2" fontFamily="Inter" fontSize="12px">
        {subTitleHeader}
      </Typography>
    </Box>
  </Box>
);
