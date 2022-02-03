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
      white    : colors.white,
      black    : colors.black,
      gray     : colors.gray,
      orange   : colors.orange
    },
  },
  spacing: 5, 
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
