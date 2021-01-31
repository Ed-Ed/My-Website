import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Page, { pages } from "./pages";

const PageRoutes = Object.entries(pages).map(([k, v]) => (
  <Route key={v.path} exact path={v.path}>
    <Page pageName={k} />
  </Route>
));

const App: React.FC = () => {
  return (
    <Switch>
      {PageRoutes}
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
