import React from 'react';
import Comment from './Comment.jsx';

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id} className="mx-0 my-2 last:mb-1">
      <Comment {...comment} />
    </div>
  ));
};

export default CommentList;
