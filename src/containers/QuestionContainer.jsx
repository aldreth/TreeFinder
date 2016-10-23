import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';

class QuestionContainer extends Component {
  render() {
    const {question} = this.props;

    return (
      <div>
        <Question questionKey={question.question} />
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  question: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    question: state.question
  };
}


export default connect(mapStateToProps)(QuestionContainer);
