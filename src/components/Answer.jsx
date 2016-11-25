import React, { PropTypes } from 'react';
import './Answer.css'

const Answer = ({answer, setQuestions}) => {
  const setQuestionClick = () => {
    setQuestions(answer.nextKey);
  };

  const linkClass = (typeof(answer.nextKey) === 'undefined') ? '' : 'link';

  return (
    <div className={`Answer ${linkClass}`} onClick={setQuestionClick}>
      <p>{answer.answer}</p>
      <p>{answer.description}</p>
    </div>
  )
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  setQuestions: PropTypes.func.isRequired
};

export default Answer;
