export const QUESTION = 'QUESTION';

export function setQuestion(value) {
  return {
    type: QUESTION,
    payload: value,
  };
}
