import reducer from './questions'
import { QUESTION } from '../actions/questions'

describe('questions reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        questionKey: 'q1'
    })
  })

  it('should handle QUESTION', () => {
    expect(
      reducer([], {
        type: QUESTION,
        payload: 'newKey'
      })
    ).toEqual({
          questionKey: 'newKey'
    })
  })
})
