import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import List from './List';
import configureStore from '../redux/store';

// import store from './redux/store';

const store = configureStore();

const Routing = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/list" component={List} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default Routing;
