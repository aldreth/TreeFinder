import React, { PropTypes } from 'react';
import './Answer.css'

const Answer = ({answer, setQuestions}) => {
  const setQuestionClick = () => {
    setQuestions(answer.nextKey);
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
  setQuestions: PropTypes.func.isRequired
};

export default Answer;
