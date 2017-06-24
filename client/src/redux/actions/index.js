import { firstAction } from './firstAction';

export const firstActionAsync = boardState => (dispatch) => {
  dispatch(firstAction(boardState));
};

// thunk function
