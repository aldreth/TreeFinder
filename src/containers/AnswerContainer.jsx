import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setQuestion} from '../actions/question';
import Answer from '../components/Answer';

class AnswerContainer extends Component {
  render() {
    const {answer, setQuestion} = this.props;

    return (
      <Answer answer={answer} setQuestion={setQuestion} />
    );
  }
}

AnswerContainer.propTypes = {
  answer: PropTypes.object.isRequired
};


function mapDispatchToProps(dispatch) {
  return {
    setQuestion: bindActionCreators(setQuestion, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(AnswerContainer);
