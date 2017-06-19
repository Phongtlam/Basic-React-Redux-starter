import { FIRST_ACTION } from '../actions/type';

const INITIAL_STATE = {
  data: '',
};

function messenger(state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case FIRST_ACTION:
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
}


export default messenger;
