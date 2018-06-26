import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
  const ticketInfo =
    <div>
      <h1>{props.name}</h1>
      <h2>Alias: {props.alias}</h2>
      <p><i>{props.formattedWaitTime} ago</i></p>
      <br />
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={() => {props.onCommentSelection(props.commentId);}}>
        {ticketInfo}
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        {ticketInfo}
        <hr />
      </div>
    );
  }
}

Comment.propTypes = {
  name: PropTypes.string,
  alias: PropTypes.string,
  comment: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onCommentSelection: PropTypes.func,
  commentId: PropTypes.string.isRequired
};

export default Comment;
