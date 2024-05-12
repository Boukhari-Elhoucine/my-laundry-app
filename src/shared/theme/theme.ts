import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your theme customizations here
  palette: {
    primary: {
      light: '#D0F6FF',
      main: '#21B7E2', // Your desired primary color
    },
    text: {
      primary: '#00334C',
      secondary: '#489FB5', // Your desired secondary color
    },
    background: {
      default: "'#F7FEFF'",
    },
  },
  typography: {
    fontFamily: 'Roboto', // Change the default font family
  },
});

export default theme;
