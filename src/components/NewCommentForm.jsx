import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewCommentForm(props){
  let _name = null;
  let _alias = null;
  let _comment = null;
  // when form is submitted
  function handleNewCommentFormSubmission(event) {
    event.preventDefault();
    // activate callback to NewCommentControl
    props.onNewCommentCreation({name: _name.value, alias: _alias.value, comment: _comment.value, timeOpen: new Moment()});
    // empty form
    _name.value = '';
    _alias.value = '';
    _comment.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewCommentFormSubmission}>
        <br />
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}
          style={{width: '300px', padding: '1%'}}
        />
        <br />
        <input
          type='text'
          id='Alias'
          placeholder='Alias'
          ref={(input) => {_alias = input;}}
          style={{width: '300px', padding: '1%'}}
        />
        <br />
        <textarea
          id='comment'
          placeholder='Type your comment here...'
          ref={(textarea) => {_comment = textarea;}}
          style={{
            width: '300px',
            height: '200px',
            padding: '1%'
          }}
        />
        <br />
        <button type='submit' style={{width: '327px', padding: '1%'}}>Submit</button>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
