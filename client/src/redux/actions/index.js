import { newGame } from './boardAction';

export const startNewGame = boardState => (dispatch) => {
  dispatch(newGame(boardState));
};
