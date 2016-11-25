import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import Question from '../components/Question';

class QuestionContainer extends Component {
  render() {
    const {questions} = this.props;

    return (
      <div>
        <Question questionKey={questions.questionKey} />
      </div>
    );
  }
}

QuestionContainer.propTypes = {
  questions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    questions: state.questions
  };
}


export default connect(mapStateToProps)(QuestionContainer);
