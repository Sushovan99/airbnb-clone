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
          '&:not(:first-of-type)': {
            borderRadius: '3px',
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

    MuiDialog: {
      defaultProps: {
        hideBackdrop: true,
        transitionDuration: 0,
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid var(--border-color)',
        },
      },
    },
  },
});
