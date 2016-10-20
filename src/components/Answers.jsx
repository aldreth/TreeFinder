import React from 'react';
import Answer from './Answer'

const Answers = ({answers}) => (
  <div>
    {answers.map((answer, index) => {
      return <Answer key={index} answer={answer.answer} nextKey={answer.nextKey} />
    })}
  </div>
);

Answers.propTypes = {
  answers: React.PropTypes.array.isRequired
};

export default Answers;
