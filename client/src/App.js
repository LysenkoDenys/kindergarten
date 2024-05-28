import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import MainFooter from './components/layout/MainFooter';
import Comments from './components/layout/Comments';
import Home from './pages/Home';
import Memo from './pages/Memo';
import NotFound from './pages/NotFound';
import Post from './components/layout/Post';
import { PostProvider } from './context/PostContext';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        {/* get rid this in the future */}
        <Route
          path="/posts/:id"
          element={
            <PostProvider>
              <Post />
            </PostProvider>
          }
        ></Route>
        {/* get rid this in the future */}
      </Routes>
      {/* <PostProvider> */}
      <Comments />
      {/* </PostProvider> */}
      <MainFooter />
    </ThemeProvider>
  );
}

export default App;
