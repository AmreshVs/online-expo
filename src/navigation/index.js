import React from "react";
import { Switch, Route } from "react-router-dom";

import Register from 'pages/register';
import Login from 'pages/login';
import Events from 'pages/events';
import EventDetail from 'pages/eventDetail';
import ExhibitorBuyTicket from 'pages/exhibitor/buyTicket';
import VisitorBuyTicket from 'pages/visitor/buyTicket';
import PaymentSuccess from 'pages/paymentSuccess';
import YourEvents from 'pages/yourEvents';
import ViewEvent from 'pages/viewEvent';
import StallDetail from 'pages/stallDetail';
import EditStall from 'pages/editStall';
import Favourites from 'pages/favourites';
import Tickets from 'pages/tickets';
import Profile from 'pages/profile';
import EditProfile from 'pages/profile/editProfile';
import ChangePassword from 'pages/profile/changePassword';
import Main from 'pages/main';
import Logout from 'pages/logout';
import Payment from 'pages/payment';
// import Test from 'pages/test';

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
      <Route path="/visitor/buy-ticket">
        <VisitorBuyTicket />
      </Route>
      <Route path="/payment-confirmation">
        <PaymentSuccess />
      </Route>
      <Route path="/your-events">
        <YourEvents />
      </Route>
      <Route path="/view-event">
        <ViewEvent />
      </Route>
      <Route path="/stall-detail">
        <StallDetail />
      </Route>
      <Route path="/edit-stall">
        <EditStall />
      </Route>
      <Route path="/favourites">
        <Favourites />
      </Route>
      <Route path="/tickets">
        <Tickets />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/edit-profile">
        <EditProfile />
      </Route>
      <Route path="/change-password">
        <ChangePassword />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/payment">
        <Payment />
      </Route>
    </Switch>
  );
}