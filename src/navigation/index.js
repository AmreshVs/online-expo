import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from '../pages/register';
import Login from '../pages/login';
import Events from '../pages/events';

export default function Navigation() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/events">
        <Events />
      </Route>
    </Switch>
  );
}

function Main() {
  return <h2>Main</h2>;
}
