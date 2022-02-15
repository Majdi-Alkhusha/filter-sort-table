import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#193F6E',
      dark: '#193F6E',
    },
    secondary: {
      main: '#FFD059'
    },
    text: {
      main: '#fff',
      secondary: '#000',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;