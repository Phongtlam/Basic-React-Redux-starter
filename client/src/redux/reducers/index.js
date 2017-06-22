import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import board from './boardReducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  routing: routerReducer,
  board,
});

export default rootReducer;
