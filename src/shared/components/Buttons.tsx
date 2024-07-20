import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'black',
  backgroundColor: theme.palette.primary.light,
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  }
}));
