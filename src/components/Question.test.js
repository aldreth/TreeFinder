import React from 'react';
import { shallow } from 'enzyme';
import Question from './Question';
import QuestionList from '../QuestionList';
import Answers from './Answers'

const wrapper = shallow(<Question questionKey='q1' />);

it('renders the question', () => {
  const question = QuestionList.q1.question;
  expect(wrapper.text()).toContain(question);
});

it('renders the Answers component', () => {
  expect(wrapper.find(Answers).length).toBe(1);
});

it('passes the correct props to the Answers component', () => {
  const expectedAnswers = QuestionList['q1']['answers'];
  expect(wrapper.find(Answers).props().answers).toBe(expectedAnswers);
});
