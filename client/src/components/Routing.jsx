import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { history } from '../redux/store';

import App from './App';
import Chessboard from './Chessboard';
import ListItem from './ListItem';

const Routing = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/chessboard" component={Chessboard} />
      <Route path="/listItem" component={ListItem} />
    </div>
  </BrowserRouter>
);

export default Routing;
