import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import UserContext from './context/userContext';
import GlobalStyle from './styles/GlobalStyles';
import { darkTheme } from './styles/themes';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <UserContext>
        <App />
      </UserContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
