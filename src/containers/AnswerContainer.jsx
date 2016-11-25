import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setQuestions} from '../actions/questions';
import Answer from '../components/Answer';

class AnswerContainer extends Component {
  render() {
    const {answer, setQuestions} = this.props;

    return (
      <Answer answer={answer} setQuestions={setQuestions} />
    );
  }
}

AnswerContainer.propTypes = {
  answer: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    setQuestions: bindActionCreators(setQuestions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AnswerContainer);
