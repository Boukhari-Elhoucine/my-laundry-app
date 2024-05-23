import { Stack, StackProps, styled } from '@mui/material';

export const CardContainer = styled(Stack)<StackProps>(({ theme }) => ({
  width: '400px',
  height: '572px',
  backgroundColor: theme.palette.background.paper,
  '&:hover': {
    // width: '384px',
    backgroundColor: theme.palette.primary.light,
    boxShadow: ' 0px 4px 15px 0px #00000033 ',
    transform: 'translateY(-40px)',
    '&:hover h5': {
      color: '#00000080',
    },
    '&:hover li div,h3 ': {
      color: '#000000',
    },
    '&:hover button': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
