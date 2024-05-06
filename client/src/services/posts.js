import { makeRequest } from './makeRequest';

// we do not need it in our project============================
//it is just returns posts
export function getPosts() {
  return makeRequest('/posts');
}

export function getPost(id) {
  return makeRequest(`/posts/${id}`);
}
// we do not need it in our project============================
