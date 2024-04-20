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
              className="w-[15px] relative cursor-pointer -translate-x-2/4 mt-2 p-0 border-[none] bg-transparent outline-none hover:bg-[hsl(235,100%,60%)] hover:before:bg-[hsl(235,100%,60%)]"
              onClick={() => setAreChildrenHidden(true)}
            />
            <div className="grow pl-2">
              <CommentList comments={childComments} />
            </div>
          </div>
          <button
            className={`text-[white] text-[0.8em] cursor-pointer px-[1em] py-[0.5em] rounded-[0.5em] border-[none] mt-1 ${
              areChildrenHidden ? 'hidden' : ''
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
