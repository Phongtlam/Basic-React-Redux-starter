import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './App';
import Chessboard from './Chessboard';

const Routing = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/chessboard" component={Chessboard} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
