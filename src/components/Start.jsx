import React, { PropTypes } from 'react';
import './Start.css'

const Start = ({setQuestions}) => {
  const setQuestionClick = () => {
    setQuestions('q1');
  };

  return (
    <div className="App-footer" onClick={setQuestionClick}>
      Start again...
    </div>
  )
};

Start.propTypes = {
  setQuestions: PropTypes.func.isRequired
};

export default Start;
