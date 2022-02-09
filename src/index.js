import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import App from '@containers/App/App';

import '@styles/index.css';

const theme = createTheme({
  palette: {
    primary: {
      main     : '#F5F5F5',
      secondary: '#C4C4C4',

    },
    warning: {
      main: '#FF9900',
    },
    info: {
      main: '#4270AD',
    },
    success: {
      main: '#27AE60',
    },
    error: {
      main: '#FF3232'
    }
  },
  colors: {
    white         : '#fff',
    black         : '#000',
    gray          : '#666',
    orange        : '#FF9900',
    blue          : '#4270AD',
    greenSecondary: '#27AE60'
  },
  spacing: 5,
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text', color: 'secondary'},
          style: {
            minWidth: 'unset',
            padding: '0',
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '500',
            color: '#666',
            textTransform: 'uppercase',
            boxShadow: 'none',
            '&:hover': {
              fontWeight: '700',
              backgroundColor: 'none',
            },
            '&:disabled': {
              color: '#C4C4C4',
            },
          },
        },
        {
          props: { variant: 'contained', color:'warning'},
          style: {
            minWidth: 'unset',
            padding: `8px 10px`,
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '700',
            color: '#fff',
            border: `1px solid transparent`,
            borderRadius: '5px',
            boxShadow: `0px 10px 15px rgba(255, 138, 0, 0.12)`,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#FF9900',
              border: `1px solid #FF9900`,
              boxShadow: 'none',
            },
            '&:active, &:focus': {
              backgroundColor: '#FF9900',
              color: '#fff',
              boxShadow: `0px 10px 15px rgba(255, 138, 0, 0.12)`,
            },
            '&:disabled': {
              backgroundColor: '#C4C4C4',
              color: '#fff',
              boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.12)`,
            },
          },
        },
      ],
    },
    MuiTouchRipple: {
      styleOverrides: {
        root: {
          disply: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 'unset',
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
