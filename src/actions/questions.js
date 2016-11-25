export const QUESTION = 'QUESTION';

export function setQuestions(value) {
  return {
    type: QUESTION,
    payload: value,
  };
}
