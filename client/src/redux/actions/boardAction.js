import { START_GAME } from './type';

export const newGame = board => ({
  type: START_GAME,
  board,
});

// thunk functions
