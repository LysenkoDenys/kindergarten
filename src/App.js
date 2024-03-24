import { Route, Routes } from 'react-router-dom';
import MainNavigation from './components/layout/MainNavigation';
import MainFooter from './components/layout/MainFooter';
import Home from './pages/Home';
import Memo from './pages/Memo';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/memo" element={<Memo />}></Route>
      </Routes>
      <MainFooter />
    </div>
  );
}

export default App;
