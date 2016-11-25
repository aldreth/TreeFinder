import { QUESTION } from '../actions/questions';

const initialState = {
  questionKey: 'q1'
}

function questions(state = initialState, action) {
  switch (action.type) {
    case QUESTION:
      if (typeof(action.payload) === 'undefined') return state;
      return Object.assign({}, state, {
          questionKey: action.payload,
      });

    default:
      return state;
  }
}

export default questions;
