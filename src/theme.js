// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'light', // or 'dark'
    primary: {
      main: '#D81B60',
    },
    secondary: {
      main: '#1E88E5',
    },
    background: {
      default: '#FFF0F5', // baby pink
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
});

export default theme;
