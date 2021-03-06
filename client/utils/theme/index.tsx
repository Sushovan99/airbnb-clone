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
    fontFamily: 'Be Vietnam Pro, sans-serif',
  },

  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Be Vietnam Pro',
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          color: '#222222',
          textTransform: 'none',
          minWidth: '0',
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
    MuiList: {
      styleOverrides: {
        root: {
          background: 'white',
          borderRadius: '10px',
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        disableTypography: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyItems: 'center',
          width: '100%',
        },
      },
      defaultProps: {
        TabIndicatorProps: {
          style: {
            backgroundColor: '#111',
            color: '#111',
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '16px',
          fontWeight: '400',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'transparent' },
        },
      },
    },
  },
});
