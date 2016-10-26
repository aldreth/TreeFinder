import React from 'react';
import { shallow } from 'enzyme';
import Answers from './Answers';
import AnswerContainer from '../containers/AnswerContainer';

const someAnswers = ['answer1', 'answer2', 'answer3']
const wrapper = shallow(<Answers answers={someAnswers} />);

it('renders the answers', () => {
  expect(wrapper.find(AnswerContainer).length).toBe(3);
});

it('passes the correct props to the AnswerContainer', () => {
  wrapper.find(AnswerContainer).forEach(function (answerContainer, index) {
    expect(answerContainer.props().answer).toBe(someAnswers[index]);
  });
});
