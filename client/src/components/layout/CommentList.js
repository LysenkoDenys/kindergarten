import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.id} className="">
      <Comment {...comment} />
    </div>
  ));
};

export default CommentList;
