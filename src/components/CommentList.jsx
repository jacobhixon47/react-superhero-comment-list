import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <hr />
      {Object.keys(props.commentList).map(function(commentId) {
        var comment = props.commentList[commentId];
        return <Comment name={comment.name}
          alias={comment.alias}
          comment={comment.comment}
          formattedWaitTime={comment.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onCommentSelection={props.onCommentSelection}
          commentId={commentId}
          key={commentId} />;
      })}
    </div>
  );
}

CommentList.propTypes = {
  commentList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onCommentSelection: PropTypes.func
};

export default CommentList;
