import { QUESTION } from '../actions/question';

const initialState = {
  question: 'q1'
}

function question(state = initialState, action) {
  switch (action.type) {
    case QUESTION:
      if (typeof(action.payload) === 'undefined') return state;
      return Object.assign({}, state, {
          question: action.payload,
      });

    default:
      return state;
  }
}

export default question;
