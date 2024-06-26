import React, { useState } from 'react';
import IconBtn from './IconBtn';
import { FaHeart, FaReply, FaTrash } from 'react-icons/fa6';
import { FaEdit, FaRegHeart } from 'react-icons/fa';
import { usePost } from '../../context/PostContext';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useAsyncFn } from '../../hooks/useAsync';
import { useUser } from '../../hooks/useUser';

import {
  createComment,
  updateComment,
  deleteComment,
  toggleCommentLike,
} from '../../services/comments';

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'short',
  timeStyle: 'short',
});

const Comment = ({ id, message, user, createdAt, likeCount, likedByMe }) => {
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {
    post,
    getReplies,
    createLocalComment,
    updateLocalComment,
    deleteLocalComment,
    toggleLocalCommentLike,
  } = usePost();
  const createCommentFn = useAsyncFn(createComment);
  const updateCommentFn = useAsyncFn(updateComment);
  const deleteCommentFn = useAsyncFn(deleteComment);
  const toggleCommentLikeFn = useAsyncFn(toggleCommentLike);
  const childComments = getReplies(id);
  const currentUser = useUser();

  function onCommentReply(message) {
    return createCommentFn
      .execute({ postId: post.id, message, parentId: id })
      .then((comment) => {
        setIsReplying(false);
        createLocalComment(comment);
      });
  }

  function onCommentUpdate(message) {
    return updateCommentFn
      .execute({ postId: post.id, message, id })
      .then((comment) => {
        setIsEditing(false);
        updateLocalComment(id, comment.message);
      });
  }

  function onCommentDelete() {
    return deleteCommentFn
      .execute({ postId: post.id, id })
      .then((comment) => deleteLocalComment(comment.id));
  }

  function onToggleCommentLike() {
    return toggleCommentLikeFn
      .execute({ postId: post.id, id })
      .then(({ addLike }) => toggleLocalCommentLike(id, addLike));
  }

  return (
    <>
      <div className="border p-2 rounded-lg border-solid border-[hsl(235,100%,90%)] bg-slate-200">
        <div className="text-[hsl(235,50%,67%)] flex justify-between text-[0.75em] mb-1">
          <span className="font-[bold]">{user.name}</span>
          <span>{dateFormatter.format(Date.parse(createdAt))}</span>
        </div>
        {isEditing ? (
          <CommentForm
            autoFocus
            initialValue={message}
            onSubmit={onCommentUpdate}
            disabled={toggleCommentLikeFn.loading}
            loading={updateCommentFn.loading}
            error={updateCommentFn.error}
          />
        ) : (
          <div className="whitespace-pre-wrap mx-2">{message}</div>
        )}
        <div className="flex gap-2 mt-2">
          <IconBtn
            onClick={onToggleCommentLike}
            Icon={likedByMe ? FaHeart : FaRegHeart}
            aria-label={likedByMe ? 'Unlike' : 'Like'}
          >
            {likeCount}
          </IconBtn>
          <IconBtn
            onClick={() => setIsReplying((prev) => !prev)}
            isActive={isReplying}
            Icon={FaReply}
            aria-label={isReplying ? 'Cancel Reply' : 'Reply'}
          />
          {user.id === currentUser.id && (
            <>
              <IconBtn
                onClick={() => setIsEditing((prev) => !prev)}
                isActive={isEditing}
                Icon={FaEdit}
                aria-label={isEditing ? 'Cancel Edit' : 'Edit'}
              />
              <IconBtn
                disabled={deleteCommentFn.loading}
                onClick={onCommentDelete}
                Icon={FaTrash}
                aria-label="Delete"
                color="text-red-500"
              />
            </>
          )}
        </div>
        {deleteCommentFn.error && (
          <div className="text-[hsl(0,100%,67%)] mt-1">
            {deleteCommentFn.error}
          </div>
        )}
      </div>
      {isReplying && (
        <div className="mt-1 ml-3">
          <CommentForm
            autoFocus
            onSubmit={onCommentReply}
            loading={createCommentFn.loading}
            error={createCommentFn.error}
          />
        </div>
      )}
      {childComments?.length > 0 && (
        <>
          <div className={`flex ${areChildrenHidden ? 'hidden' : ''}`}>
            <button
              aria-label="Hide Replies"
              className="bg-transparent border-none p-0 w-15 mt-2 transform translate-x-1/2 relative cursor-pointer outline-none hover:bg-blue-500 focus-visible:bg-blue-500 before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-px before:bg-gray-300 before:transition-bg duration-100 ease-in-out"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="grow pl-4">
              <CommentList comments={childComments} />
            </div>
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-600 focus-visible:bg-blue-600 text-white rounded-md px-2 py-0.5 cursor-pointe relative my-1 ${
              !areChildrenHidden ? 'hidden' : ''
            }`}
            onClick={() => setAreChildrenHidden(false)}
          >
            Show Replies
          </button>
        </>
      )}
    </>
  );
};

export default Comment;

// 'before:content-[""] before:absolute before:w-px before:bg-[hsl(235,50%,74%)] before:transition-[background-color] before:duration-100 before:ease-[ease-in-out] before:left-2/4 before:inset-y-0'
