import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { history } from '../redux/store';

import App from './App';
import Chessboard from './Chessboard';
import ListItem from './ListItem';

const Routing = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="chessboard" component={Chessboard} />
      <Route path="listItem" component={ListItem} />
    </Switch>
  </Router>
);

export default Routing;
