import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import App from './containers/App';
import { store } from './bll/store';
import { Provider } from 'react-redux';
// import App from '@containers/App/App';

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
      main  : '#4270AD',
      gray  : '#666666',
      red   : '#FF3232',
      green : '#79B256',
      blue  : '#4270AD',
      brown : '#8C4C14',
      yellow: '#F9CB38',
    },
    success: {
      main: '#27AE60',
    },
    error: {
      main: '#FF3232'
    },

  },
  colors: {
    white         : '#fff',
    black         : '#000',
    gray          : '#666',
    orange        : '#FF9900',
    blue          : '#4270AD',
    greenSecondary: '#27AE60',
    mustard       : '#F9CB38',
    green         : '#79B256',
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
            transition: `all .5s ease-in-out`,
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
            border: `2px solid transparent`,
            borderRadius: '5px',
            boxShadow: `0px 10px 15px rgba(255, 138, 0, 0.12)`,
            transition: `all .5s ease-in-out`,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#FF9900',
              border: `2px solid #FF9900`,
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
        {
          props: { variant: 'contained', color:'success'},
          style: {
            minWidth: 'unset',
            padding: `8px 10px`,
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: '700',
            color: '#fff',
            border: `2px solid transparent`,
            borderRadius: '5px',
            boxShadow: `0px 10px 20px rgba(121, 178, 86, 0.12)`,
            transition: `all .5s ease-in-out`,
            backgroundColor: '#79B256',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#79B256',
              border: `2px solid #79B256`,
              boxShadow: 'none',
              filter: `drop-shadow(0px 10px 20px rgba(121, 178, 86, 0.12))`,
            },
            '&:active, &:focus': {
              backgroundColor: '#79B256',
              color: '#fff',
              boxShadow: `0px 10px 20px rgba(121, 178, 86, 0.12)`,
            },
            '&:disabled': {
              backgroundColor: '#C4C4C4',
              color: '#fff',
              boxShadow: `0px 10px 15px rgba(0, 0, 0, 0.12)`,
            },
          },
        },
        {
          props: { variant: 'contained', color:'info'},
          style: {
            display: 'flex',
            alignItems: 'center',
            minWidth: 'unset',
            padding: `15px 21px`,
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: '400',
            textTransform: 'initial',
            color: '#fff',
            border: `2px solid transparent`,
            borderRadius: '5px',
            boxShadow: `0px 10px 15px rgba(66, 112, 173, 0.12)`,
            transition: `all .5s ease-in-out`,
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#4270AD',
              border: `2px solid #4270AD`,
              boxShadow: 'none',
              filter: `drop-shadow(0px 10px 15px rgba(66, 112, 173, 0.12))`,
            },
            '&:active, &:focus': {
              backgroundColor: '#4270AD',
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
  // <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  // </React.StrictMode>
  ,document.getElementById('root'),
);
