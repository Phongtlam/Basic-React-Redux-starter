import { combineReducers } from 'redux';
import firstAction from './first_action_reducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  firstAction,
});

export default rootReducer;
