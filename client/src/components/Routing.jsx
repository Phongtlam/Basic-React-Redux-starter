import React from 'react';
import { Router, Route } from 'react-router'
import { history } from '../redux/store';

import App from './App';
import Chessboard from './Chessboard';
import ListItem from './ListItem';

const Routing = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="chessboard" component={Chessboard} />
      <Route path="listItem" component={ListItem} />
    </div>
  </Router>
);

export default Routing;
