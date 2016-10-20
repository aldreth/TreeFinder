import React from 'react';
import QuestionList from '../QuestionList';


const Question = ({questionKey}) => (
  <div>
    <h1>{QuestionList[questionKey]['question']}</h1>
  </div>
);

Question.propTypes = {
  questionKey: React.PropTypes.string.isRequired
};

export default Question;
