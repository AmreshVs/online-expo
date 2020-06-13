import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from '../pages/register';
import Login from '../pages/login';
import Events from '../pages/events';
import EventDetail from '../pages/eventDetail';
import ExhibitorBuyTicket from '../pages/exhibitor/buyTicket';
import PaymentSuccess from '../pages/paymentSuccess';

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
      <Route path="/event-detail">
        <EventDetail />
      </Route>
      <Route path="/exhibitor/buy-ticket">
        <ExhibitorBuyTicket />
      </Route>
      <Route path="/payment-confirmation">
        <PaymentSuccess />
      </Route>
    </Switch>
  );
}

function Main() {
  return <h2>Main</h2>;
}
