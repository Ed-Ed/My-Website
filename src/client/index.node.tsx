import React from "react";
import { StaticRouter, StaticRouterContext } from "react-router";
import { ThemeProvider } from "styled-components";
import { Theme } from "@edwardandrewb/elements";

import App from "./App";

type Props = {
  url: string;
  routerContext: StaticRouterContext;
  theme: Theme;
}

const NodeApp: React.FC<Props> = ({ url, routerContext, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <StaticRouter location={url} context={routerContext}>
        <App />
      </StaticRouter>
    </ThemeProvider>
  );
};

export default NodeApp;
