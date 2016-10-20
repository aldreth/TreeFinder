import React from 'react';
import Answers from './Answers'
import QuestionList from '../QuestionList';

const Question = ({questionKey}) => (
  <div>
    <h1>{QuestionList[questionKey]['question']}</h1>
    <Answers answers={QuestionList[questionKey]['answers']} />
  </div>
);

Question.propTypes = {
  questionKey: React.PropTypes.string.isRequired
};

export default Question;
