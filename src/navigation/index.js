import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Availability from '../containers/Availability';
import Messages from '../containers/Messages';
import Request from '../containers/Request';
import Schedule from '../containers/Schedule';
import Trade from '../containers/Trade';
import Tests from '../tests';
import NoMatch from './NoMatch';

function Navigation() {
  return (
    <Switch>
      <Route exact path="/">
        <Schedule />
      </Route>
      <Route path="/schedule">
        <Schedule />
      </Route>
      <Route path="/availability">
        <Availability />
      </Route>
      <Route path="/request">
        <Request />
      </Route>
      <Route path="/trade">
        <Trade />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/tests">
        <Tests />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default Navigation;
