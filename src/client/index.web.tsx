import React from "react";
import { hydrate } from "react-dom";
import { loadableReady } from "@loadable/component";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createTheme } from "@edwardandrewb/elements";

import App from "./App";

const theme = createTheme();

const WebApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  );
};

loadableReady(() => {
  hydrate(<WebApp />, document.getElementById("app"));
});

if (module.hot) {
  module.hot.accept();
}
