import React from 'react';
import ReactDOM from 'react-dom';

import { colors } from './styles/styles';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import App from '@containers/App/App';

import '@styles/index.css';

const theme = createTheme({
  palette: {
    primary: {
      main     : colors.black,
      secondary: colors.gray,
    },
  },
  colors: {
    white         : colors.white,
    black         : colors.black,
    gray          : colors.gray,
    orange        : colors.orange,
    greenSecondary: colors.greenSecondary
  },
  spacing: 5,
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
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
