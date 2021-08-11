import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "~/pages/Home";
import MaxMin from "~/pages/MaxMin";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/resume" exact component={MaxMin} />
      </Switch>
    </Router>
  );
}
