import { usePost } from '../../context/PostContext';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const Post = () => {
  const { post, rootComments } = usePost();
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className="text-[24px]">Comments</h3>
      <section>
        <CommentForm loading error onSubmit />
        {rootComments != null && rootComments.length > 0 && (
          <div className="mt-4">
            <CommentList comments={rootComments} />
          </div>
        )}
      </section>
    </>
  );
};

export default Post;
