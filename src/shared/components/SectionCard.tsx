import { Box, List, Typography } from '@mui/material';
import React from 'react';
import { ListItemService } from './ListItemService';

interface SectionCardProps {
  listItems: string[];
}

export const SectionCard: React.FC<SectionCardProps> = ({ listItems }) => (
  <Box sx={{ margin: '0px', padding: '0px 24px' }}>
    <Typography
      variant="h5"
      fontSize="22px"
      fontFamily="Inter"
      fontWeight={400}
      color="#A9A9AA"
    >
      What’s included
    </Typography>

    <List disablePadding>
      {listItems.map((item, index) => (
        <ListItemService name={item} key={index} />
      ))}
    </List>
  </Box>
);
