import { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Block from './Block';
import Button from './Button';
import { PostList } from './PostList';
// import Post from './Post';
// import CommentForm from './CommentForm';
// import CommentList from './CommentList';
// import { usePost } from '../../context/PostContext';
// import { useAsyncFn } from '../../hooks/useAsync';
// import { createComment } from '../../services/comments';

const Comments = () => {
  const [text, setText] = useState('');
  const darkTheme = useTheme();
  const themeComment = darkTheme
    ? 'px-3 py-1.5 rounded-[10px] w-[70%] mr-1 my-3 shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] text-black outline-none leading-[18px]'
    : 'px-3 py-1.5 rounded-[10px] w-[70%] mr-1 my-3 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)] outline-none leading-[18px]';

  const handleChange = (event) => setText(event.target.value);

  //migration=======================
  // const { rootComments, createLocalComment } = usePost();
  // const {
  //   loading,
  //   error,
  //   execute: createCommentFn,
  // } = useAsyncFn(createComment);

  // function onCommentCreate(message) {
  //   return createCommentFn({ message }).then(createLocalComment);
  // }
  //migration=======================

  return (
    <Block>
      <PostList />
      {/* <Post /> */}
      <h3 className="text-xl font-bold text-center">Коментарі:</h3>
      <div className="flex justify-center items-center" id="comments">
        <textarea
          className={themeComment}
          placeholder="Текст коментаря..."
          value={text}
          onChange={handleChange}
        />
        <Button
          label="Коментувати"
          className="min-w-[20%]"
          actionOnClick={() => {
            text && alert(text);
            setText('');
          }}
        />
      </div>
      {/* migration */}
      {/* <section>
        <CommentForm
          loading={loading}
          error={error}
          onSubmit={onCommentCreate}
        />
        {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments} />
          </div>
        )}
      </section> */}
      {/* migration */}
    </Block>
  );
};

export default Comments;
