import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Routing from './components/Routing';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
