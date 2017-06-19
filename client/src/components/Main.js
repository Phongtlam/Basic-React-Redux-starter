import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './List';

const Main = () => (
  <Router>
    <div>
      <Route exact path="/" component={List} />
    </div>
  </Router>
);

export default Main;