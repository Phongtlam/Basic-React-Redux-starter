import React from 'react';
import { Router, Route } from 'react-router'
import { history } from '../redux/store';

import App from './App';
import List from './List';
import ListItem from './ListItem';

const Routing = () => (
  <Router history={history}>
    <div>
      <Route exact={true} path="/" component={App}/>
      <Route path="/List" component={List}/>
      <Route path="/ListItem" component={ListItem}/>
    </div>
  </Router>
)

export default Routing;
