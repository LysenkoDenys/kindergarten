import { makeRequest } from './makeRequest';

export function getPosts() {
  //!==========================
  return makeRequest('http://localhost:3001/posts');
  //!==========================
}

export function getPost(id) {
  //!==========================
  return makeRequest(`/posts/${id}`);
  //!==========================
}
