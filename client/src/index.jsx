import React from 'react';
import ReactDOM from 'react-dom';

import Routing from './components/Routing';

ReactDOM.render(
  <Routing />,
  document.getElementById('root'),
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept();
}
