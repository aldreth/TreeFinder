import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setQuestions} from '../actions/questions';
import Start from '../components/Start'

class StartContainer extends Component {
  render() {
    const {setQuestions} = this.props;

    return (
      <Start setQuestions={setQuestions} />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setQuestions: bindActionCreators(setQuestions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(StartContainer);
