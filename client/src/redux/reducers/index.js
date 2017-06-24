import { combineReducers } from 'redux';
import firstAction from './firstActionReducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  firstAction,
});

export default rootReducer;
