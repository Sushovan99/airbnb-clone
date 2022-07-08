import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: ['be-vietnam-pro', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#FF385C',
      dark: '#222222',
      light: '#dddddd',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#FF385C',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});
