import React from 'react';
import IconBtn from './IconBtn';
import { FaHeart, FaReply, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: 'short',
  timeStyle: 'short',
});

const Comment = ({ id, message, user, createdAt }) => {
  return (
    <>
      <div className="border p-2 rounded-lg border-solid border-[hsl(235,100%,90%)] bg-slate-200 mb-2">
        <div className="text-[hsl(235,50%,67%)] flex justify-between text-[0.75em] mb-1">
          <span className="font-[bold]">{user.name}</span>
          <span className="">
            {dateFormatter.format(Date.parse(createdAt))}
          </span>
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
    </>
  );
};

export default Comment;
