import React from 'react';
import { shallow } from 'enzyme';
import Answer from './Answer';

const setQuestionsMock = jest.fn();

const answerWithNextKey = {
  answer: 'The answer with a key',
  nextKey: 'nextKey'
};

const answerWithoutNextKey = {
  answer: 'The answer without a key'
};

const wrapperWithNextKey = shallow(<Answer answer={answerWithNextKey} setQuestions={setQuestionsMock} />);
const wrapperWithoutNextKey = shallow(<Answer answer={answerWithoutNextKey} setQuestions={setQuestionsMock} />);

it('renders the answer when there is a nextKey', () => {
  expect(wrapperWithNextKey.text()).toContain('The answer with a key');
});

it('renders the answer with an `answer` class when there is a nextKey', () => {
  expect(wrapperWithNextKey.find('.answer').length).toBe(1);
});

it('renders the answer with a `link` class when there is a nextKey', () => {
  expect(wrapperWithNextKey.find('.answer.link').length).toBe(1);
});

it('passes the `nextKey` to setQuestion when the answer is clicked', () => {
  wrapperWithNextKey.find('.link').simulate('click');
  expect(setQuestionsMock.mock.calls[0]).toEqual(['nextKey']);
});

it('renders the answer when there is not a nextKey', () => {
  expect(wrapperWithoutNextKey.text()).toContain('The answer without a key');
});

it('renders the answer with an `answer` class when there is not a nextKey', () => {
  expect(wrapperWithoutNextKey.find('.answer').length).toBe(1);
});

it('renders the answer without a `link` class when there is not a nextKey', () => {
  expect(wrapperWithoutNextKey.find('.answer.link').length).toBe(0);
});
