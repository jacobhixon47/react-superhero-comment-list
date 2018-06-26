import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewCommentForm from './NewCommentForm';
import PropTypes from 'prop-types';

class NewCommentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.handleQuestionConfirmation = this.handleQuestionConfirmation.bind(this);
  }

  handleQuestionConfirmation() {
    this.setState({showForm: true});
  }

  render() {
    let currentlyVisible = null;
    if (this.state.showForm) {
      currentlyVisible = <NewCommentForm onNewCommentCreation={this.props.onNewCommentCreation} />;
    } else {
      currentlyVisible = <ConfirmationQuestions onQuestionConfirmation={this.handleQuestionConfirmation} />;
    }
    return (
      <div>
        {currentlyVisible}
      </div>
    );
  }
}

NewCommentControl.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentControl;
