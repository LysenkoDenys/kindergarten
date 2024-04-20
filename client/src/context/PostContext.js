import React, { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/posts';
import { useAsync } from '../hooks/useAsync';

const Context = React.createContext();

export function usePost() {
  return useContext(Context);
}

export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  const commentsByParentId = useMemo(() => {
    if (post?.comments == null) return [];
    const group = {};
    post.comments.forEach((comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });
    return group;
  }, [post?.comments]);

  function getReplies(parentId) {
    return commentsByParentId[parentId];
  }

  return (
    <Context.Provider
      value={{
        post: { id, ...post },
        rootComments: commentsByParentId[null],
        getReplies,
      }}
    >
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1 className="text-[hsl(0,100%,67%)]">{error}</h1>
      ) : (
        children
      )}
    </Context.Provider>
  );
}
