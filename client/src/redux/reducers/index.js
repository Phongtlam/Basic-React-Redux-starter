import { combineReducers } from 'redux';
import board from './boardReducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  board,
});

export default rootReducer;
