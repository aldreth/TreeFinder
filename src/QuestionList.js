const QuestionList = {
  q1: {
    question: 'Is it an oak?',
    answers: [
      {
        answer: 'Yes'
      },
      {
        answer: 'No',
        nextKey: 'q2'
      },
    ]
  },
  q2: {
    question: 'Is it an ash or a horse chestnut?',
    answers: [
      {
        answer: 'An ash'
      },
      {
        answer: 'A horse chestnut'
      },
      {
        answer: 'Neither',
        nextKey: 'q3'
      }
    ]
  },
  q3: {
    question: 'Is it evergreen',
    answers: [
      {
        answer: 'No',
        nextKey: 'q4'
      },
      {
        answer: 'Yes',
        nextKey: 'q5'
      },
    ]
  },
  q4: {
    answers: [
      {
        answer: 'It is a sycamore'
      },
    ]
  },
  q5: {
    answers: [
      {
        answer: 'It is a cedar'
      }
    ]
  }
}

export default QuestionList;
