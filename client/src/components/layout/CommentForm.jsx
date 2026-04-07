import React, { useState } from 'react';

const CommentForm = ({
  loading,
  error,
  onSubmit,
  autoFocus = false,
  initialValue = '',
}) => {
  const [message, setMessage] = useState(initialValue);
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(message).then(() => setMessage(''));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <textarea
          className="message-input flex-grow resize-none h-20 rounded-md p-2 text-base border-2 border-gray-300 leading-5 focus:border-blue-500 focus:outline-none"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          autoFocus={autoFocus}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-600 focus-visible:bg-blue-600 text-white rounded-md px-2 py-0.5 cursor-pointe relative disabled:bg-gray-300"
          disabled={loading}
          type="submit"
        >
          {loading ? 'Loading' : 'Post'}
        </button>
      </div>
      <div className="text-red-500">{error}</div>
    </form>
  );
};

export default CommentForm;
