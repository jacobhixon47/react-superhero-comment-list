import React from 'react';
import PropTypes from 'prop-types';

function CommentDetail(props) {
  return (
    <div>
      <hr />
      <h1>{props.adminSelectedComment.name} - {props.adminSelectedComment.alias}</h1>
      <h2><i>Submitted {props.adminSelectedComment.formattedWaitTime} ago</i></h2>
      <h4><em>{props.adminSelectedComment.comment}</em></h4>
      <hr />
    </div>
  );
}

CommentDetail.propTypes = {
  adminSelectedComment: PropTypes.object
};

export default CommentDetail;
