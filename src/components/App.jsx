import React from 'react';
import './App.css';

import QuestionContainer from '../containers/QuestionContainer';
import StartContainer from '../containers/StartContainer';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h2>Find your tree</h2>
      <p>Answer the questions and discover what tree you're looking at.</p>
    </div>
    <QuestionContainer />
    <StartContainer />
  </div>
);

export default App;
