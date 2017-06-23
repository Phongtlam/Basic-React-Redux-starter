import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

// const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxThunk));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

// export default store;
