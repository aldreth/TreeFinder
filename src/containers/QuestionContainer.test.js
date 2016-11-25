import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import QuestionContainer from './QuestionContainer';
import Question from '../components/Question'

const mockStore = configureStore();
const store = mockStore({ questions: { questionKey: 'q1' }});
const questionContainer = mount(<Provider store={store}><QuestionContainer /></Provider>);

it('renders the Question component', () => {
  expect(questionContainer.find(Question).length).toBe(1);
});

it('renders the Question with question prop from redux state', () => {
  expect(questionContainer.find(Question).props().questionKey).toEqual('q1');
});
