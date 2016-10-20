import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Question from './components/Question';

class App extends Component {
  componentWillMount() {
    this.setState({
      questionKey: 'q1',
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Question questionKey={this.state.questionKey} />
      </div>
    );
  }
}

export default App;
