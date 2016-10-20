import React, {Component, PropTypes} from 'react';

class Answer extends Component {

  static propTypes = {
    answer: PropTypes.string.isRequired,
    nextKey: PropTypes.string
  };

  render() {
    return (
      <div className="answer" >
        {this.props.answer}
      </div>
    )}
  }
export default Answer;
