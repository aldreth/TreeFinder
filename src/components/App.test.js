import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import QuestionContainer from '../containers/QuestionContainer'

const wrapper = shallow(<App />);

it('renders the title', () => {
  expect(wrapper.text()).toContain('Welcome to React')
});

it('renders the QuestionContainer component', () => {
  expect(wrapper.find(QuestionContainer).length).toBe(1)
});
