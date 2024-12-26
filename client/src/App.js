import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DNA } from 'react-loader-spinner';
import MainNavigation from './components/layout/MainNavigation';
import MainFooter from './components/layout/MainFooter';
import Comments from './components/layout/Comments';
// import Home from './pages/Home';
// import Memo from './pages/Memo';
import NotFound from './pages/NotFound';
// import Post from './components/layout/Post';
import { PostProvider } from './context/PostContext';
import { ThemeProvider } from './ThemeContext';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Memo = React.lazy(() => import('./pages/Memo'));
const Post = React.lazy(() => import('./components/layout/Post'));

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        {' '}
        {/* Контейнер для структури */}
        <MainNavigation />
        <main className="flex-grow min-h-[calc(100dvh-150px)]">
          {' '}
          {/* Основний контент */}
          <Suspense
            fallback={
              <div className="flex justify-center items-center">
                <DNA
                  visible={true}
                  height="70"
                  width="70"
                  ariaLabel="dna-loading"
                />
              </div>
            }
          >
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
          </Suspense>
        </main>
        <MainFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
