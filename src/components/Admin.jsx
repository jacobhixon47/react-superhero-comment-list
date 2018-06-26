import React from 'react';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import CommentDetail from './CommentDetail';

function Admin(props) {
  let optionalSelectedCommentContent = null;
  if (props.adminSelectedComment != null) {
    optionalSelectedCommentContent = <CommentDetail adminSelectedComment={props.commentList[props.adminSelectedComment]} />;
  }
  return (
    <div>
      <h2>Admin</h2>
      {optionalSelectedCommentContent}
      <CommentList commentList={props.commentList} currentRouterPath={props.currentRouterPath} onCommentSelection={props.onCommentSelection} />
    </div>
  );
}

Admin.propTypes = {
  commentList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onCommentSelection: PropTypes.func.isRequired,
  adminSelectedComment: PropTypes.string
};

export default Admin;
