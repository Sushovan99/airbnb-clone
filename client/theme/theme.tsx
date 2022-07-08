import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff385c',
      light: '#dddddd',
      dark: '#222222',
    },
  },

  typography: {
    fontFamily: ['Be Vietnam Pro', 'sans-serif'].join(','),
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: '#222222',
          textTransform: 'none',
          '&:hover': { backgroundColor: 'transparent' },
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        grouped: {
          '&:not(:last-of-type)': {
            borderColor: 'transparent',
          },
        },
      },
    },
  },
});
