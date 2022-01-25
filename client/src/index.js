import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import UserContext from './context/userContext';
import GlobalStyle from './styles/GlobalStyles';
import { darkTheme } from './styles/themes';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <UserContext>
          <App />
        </UserContext>
        <ReactQueryDevtools position='bottom-right' initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
