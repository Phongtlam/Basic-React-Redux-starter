import { combineReducers } from 'redux';
import first from './first_action_reducer';

// store
const rootReducer = combineReducers({
  // reducers go here
  first,
});

export default rootReducer;
