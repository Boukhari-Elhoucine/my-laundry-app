import './utils/I18n';
import Home from './features/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './shared/theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
