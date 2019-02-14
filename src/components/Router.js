import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";
import Nope from "./Nope";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={Nope} />
    </Switch>
  </BrowserRouter>
);

export default Router;
