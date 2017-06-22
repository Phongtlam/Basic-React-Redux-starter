import { START_GAME } from '../actions/type';

const INITIAL_STATE = {
  board: '',
};

function board(state = INITIAL_STATE, { type, board }) {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        board,
      };
    default:
      return state;
  }
}


export default board;
