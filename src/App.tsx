import './utils/I18n';
// import Home from './features/Home/Home';
import { ThemeProvider } from '@mui/material/styles';
import theme from './shared/theme/theme';
import { CssBaseline } from '@mui/material';
import { ServicesSection } from './features/Home/components/ServicesSection';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        {/* <Home /> */}
        <ServicesSection />/
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
