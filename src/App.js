import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import MainFooter from './components/layout/MainFooter';
import Comments from './components/layout/Comments';
import Home from './pages/Home';
import Memo from './pages/Memo';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
      </Routes>
      <Comments />
      <MainFooter />
    </ThemeProvider>
  );
}

export default App;
