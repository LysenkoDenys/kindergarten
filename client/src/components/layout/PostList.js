import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../../services/posts';
import { useAsync } from '../../hooks/useAsync';

export function PostList() {
  const { loading, error, value: posts } = useAsync(getPosts);

  if (loading) return <h1>Loading</h1>;
  if (error) return <h1>{error}</h1>;

  return posts.map((post) => {
    return (
      <h1 key={post.id}>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h1>
    );
  });
}