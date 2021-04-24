import React from 'react';
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { theme } from './theme';

const WebApp: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

loadableReady(() => {
  hydrate(<WebApp />, document.getElementById('app'));
});

if (module.hot) {
  module.hot.accept();
}
