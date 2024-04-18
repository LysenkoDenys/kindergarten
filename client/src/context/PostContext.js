import React from 'react';
import { useParams } from 'react-router-dom';
import { getPost } from '../services/posts';
import { useAsync } from '../hooks/useAsync';

const Context = React.createContext();

export function PostProvider({ children }) {
  const { id } = useParams();
  const { loading, error, value: post } = useAsync(() => getPost(id), [id]);
  console.log(post); //
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
