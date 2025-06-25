// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1800, 
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#D81B60',
    },
    secondary: {
      main: '#1E88E5',
    },
    background: {
      default: '#f7dde6', // baby pink
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },
  },
});

export default theme;
