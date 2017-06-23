import { START_GAME } from '../actions/type';

const INITIAL_STATE = {
  boardState: '',
};

const board = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case START_GAME:
      return {
        ...state,
        boardState: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      };
    default:
      return state;
  }
};

export default board;
