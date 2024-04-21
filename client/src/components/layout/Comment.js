import React, { useState } from 'react';
import IconBtn from './IconBtn';
import { FaHeart, FaReply, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { usePost } from '../../context/PostContext';
import CommentList from './CommentList';

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'short',
  timeStyle: 'short',
});

const Comment = ({ id, message, user, createdAt }) => {
  const { getReplies } = usePost();
  const childComments = getReplies(id);
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);

  return (
    <>
      <div className="border p-2 rounded-lg border-solid border-[hsl(235,100%,90%)] bg-slate-200">
        <div className="text-[hsl(235,50%,67%)] flex justify-between text-[0.75em] mb-1">
          <span className="font-[bold]">{user.name}</span>
          <span>{dateFormatter.format(Date.parse(createdAt))}</span>
        </div>
        <div className="whitespace-pre-wrap mx-2">{message}</div>
        <div className="flex gap-2 mt-2">
          <IconBtn Icon={FaHeart} aria-label="Like">
            2
          </IconBtn>
          <IconBtn Icon={FaReply} aria-label="Reply" />
          <IconBtn Icon={FaEdit} aria-label="Edit" />
          <IconBtn Icon={FaTrash} aria-label="Delete" color="text-red-500" />
        </div>
      </div>
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
