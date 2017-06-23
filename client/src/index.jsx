import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routing from './components/Routing';
import configureStore from './redux/store';
// import store from './redux/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root'),
);
