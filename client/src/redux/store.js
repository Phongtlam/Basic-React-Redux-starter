import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk));

export const history = syncHistoryWithStore(createBrowserHistory(), store);
