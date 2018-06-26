import React from 'react';
import PropTypes from 'prop-types';

function ConfirmQuestions(props) {
  return (
    <div>
      <p><i>Have you asked for support from our world domination AI?</i></p>
      <button onClick={props.onQuestionConfirmation}>Yes</button>
    </div>
  );
}

ConfirmQuestions.propTypes = {
  onQuestionConfirmation: PropTypes.func
};


export default ConfirmQuestions;
