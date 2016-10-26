import reducer from './question'
import { QUESTION } from '../actions/question'

describe('question reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        question: 'q1'
    })
  })

  it('should handle QUESTION', () => {
    expect(
      reducer([], {
        type: QUESTION,
        payload: 'newKey'
      })
    ).toEqual({
          question: 'newKey'
    })
  })
})
