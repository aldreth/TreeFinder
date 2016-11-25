import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import AnswerContainer from './AnswerContainer';
import Answer from '../components/Answer'

import { setQuestions } from '../actions/questions'


const mockStore = configureStore();

// const setQuestionMock = jest.fn();

const answer = {
  answer: 'The answer with a key',
  nextKey: 'nextKey'
}
const store = mockStore({answer: answer, setQuestions: setQuestions} );
const answerContainer = mount(<Provider store={store}><AnswerContainer answer={answer} /></Provider>);


it('renders the Answer component', () => {
  expect(answerContainer.find(Answer).length).toBe(1);
});

it('renders the Answer with question prop from redux state', () => {
  expect(answerContainer.find(Answer).props().answer).toEqual(answer);
});

it('dispatches the `QUESTION` action when the answer is clicked', () => {
  answerContainer.find('.link').simulate('click');
  const actions = store.getActions();
  const expectedPayload = { type: 'QUESTION', payload: 'nextKey' };
  expect(actions).toEqual([expectedPayload]);
});
