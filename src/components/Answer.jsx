import React, { PropTypes } from 'react';
import './Answer.css'

const Answer = ({answer, setQuestion}) => {
  const setQuestionClick = () => {
    setQuestion(answer.nextKey);
  };

  const linkClass = (typeof(answer.nextKey) === 'undefined') ? '' : 'link';

  return (
    <div className={`answer ${linkClass}`} onClick={setQuestionClick}>
      {answer.answer}
    </div>
  )
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  setQuestion: PropTypes.func.isRequired
};

export default Answer;
