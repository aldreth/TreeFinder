import { QUESTION, setQuestions } from './questions';

it('should create an action to set the question key', () => {
    const newKey = 'newKey'
    const expectedAction = {
      type: QUESTION,
      payload: newKey
    }

    expect(setQuestions(newKey)).toEqual(expectedAction)
  })
