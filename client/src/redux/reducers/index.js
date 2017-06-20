import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import first from './first_action_reducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  routing: routerReducer,
  first,
});

export default rootReducer;
