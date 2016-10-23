import React from 'react';
import AnswerContainer from '../containers/AnswerContainer'

const Answers = ({answers}) => (
  <div>
    {answers.map((answer, index) => {
      return <AnswerContainer key={index} answer={answer} />
    })}
  </div>
);

Answers.propTypes = {
  answers: React.PropTypes.array.isRequired
};

export default Answers;
