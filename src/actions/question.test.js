import { QUESTION, setQuestion } from './question';

it('should create an action to set the question key', () => {
    const newKey = 'newKey'
    const expectedAction = {
      type: QUESTION,
      payload: newKey
    }

    expect(setQuestion(newKey)).toEqual(expectedAction)
  })
