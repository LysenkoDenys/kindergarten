import { usePost } from '../../context/PostContext';

const Post = () => {
  const { post } = usePost();
  return (
    <>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3 className="text-[24px]">Comments</h3>
      <section>{post.comments}</section>
    </>
  );
};

export default Post;
