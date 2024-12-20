import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMoon } from 'react-icons/fi';
import { MdOutlineLightMode } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa6';
import { GiBirchTrees } from 'react-icons/gi';
import Hamburger from './Hamburger';
import { useTheme, useThemeUpdate } from '../../ThemeContext';
import getUrl from '../../data/getUrl';
import Scrollbar from './Scrollbar';

const MainNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [loading, setLoading] = useState(true);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.screen.width);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setLoading(false);
    // Simulate an async operation, such as fetching data
    setTimeout(() => setLoading(true), 2000);
  }, []);

  const themeHeader = darkTheme
    ? 'w-full h-20 flex flex-wrap items-center justify-between sticky z-50 px-[5%] pb-3 top-0 select-none bg-[rgba(0,0,0,0.5)] text-[#CCCCCC] shadow-[5px_5px_10px_rgba(255,255,255,0.9)]'
    : 'w-full h-20 flex flex-wrap items-center justify-between sticky z-50 px-[5%] pb-3 top-0 select-none bg-[rgba(204,204,204,0.5)] text-[#333333] shadow-[5px_5px_10px_rgba(0,0,0,0.5)]';

  const themeLink = darkTheme
    ? 'no-underline text-2xl hover:text-gray-400'
    : 'no-underline text-2xl hover:text-black';

  const linkToComments = () => window.location.href;

  return (
    <header className={themeHeader}>
      {loading && <Scrollbar />}
      <div
        className="text-[2rem] font-bold hover:scale-110 ease-in-out duration-300"
        onClick={closeHamburger}
      >
        <Link className={themeLink} to="/" aria-label="go to the main page">
          {screenWidth < 479 ? (
            <GiBirchTrees className="text-[2rem] w-[2rem] h-[2rem]" />
          ) : (
            `Berizka`
          )}
        </Link>
      </div>
      <div title="змінити тему">
        {darkTheme ? (
          <MdOutlineLightMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300 hover:text-gray-400"
            aria-label="Switch to light mode"
          />
        ) : (
          <FiMoon
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300 hover:text-black"
            aria-label="Switch to dark mode"
          />
        )}
      </div>
      <div onClick={getUrl} title="шукати спогади">
        <Link
          to="memo/#search"
          aria-label="search for memories about group mates"
        >
          <FiSearch className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300" />
        </Link>
      </div>
      <div onClick={getUrl} title="коментувати">
        <Link
          to={
            linkToComments().includes('/memo') ? 'memo/#comments' : '/#comments'
          }
          aria-label="Go to comments section"
        >
          <FaRegCommentDots className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300" />
        </Link>
      </div>
      <nav className="navigation">
        <ul
          className={`list-none flex items-baseline m-0 p-0 md:hidden transition-transform duration-300 ease-in-out ${
            hamburgerOpen ? 'translate-y-0' : ''
          }`}
          aria-label="Main navigation"
        >
          <li className="ml-8 hover:scale-110 ease-in-out duration-300">
            <Link
              className={themeLink}
              to="/"
              onClick={toggleHamburger}
              aria-label="Home page"
            >
              Home
            </Link>
          </li>
          <li className="ml-8 hover:scale-110 ease-in-out duration-300">
            <Link
              className={themeLink}
              to="/memo"
              onClick={toggleHamburger}
              aria-label="Memo page"
            >
              Memo
            </Link>
          </li>
        </ul>
        <div
          className="hamburger cursor-pointer"
          onClick={toggleHamburger}
          aria-label="Toggle navigation menu"
        >
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </nav>
      <style jsx="true">{`
        .navigation ul {
          display: flex;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
          top: -100%;
          gap: 20px;
        }

        .navigation ul li {
          list-style-type: none;
          margin: 6px 2px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }

        @media (max-width: 768px) {
          .hamburger {
            display: block;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: ${darkTheme
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(204, 204, 204, 0.8)'};
            border-radius: 3px;
            padding: 0 10px;
            position: fixed;
            height: auto;
            width: auto;
            top: 90px;
            right: 6%;
            overflow: auto;
            box-shadow: ${darkTheme
              ? '5px 5px 10px rgba(225,225,225, 0.9)'
              : '5px 5px 10px rgba(0,0,0, 0.5)'};
            transform: ${hamburgerOpen ? 'translateY(0)' : 'translateY(-100%)'};
            transition: transform 0.3s ease-in-out;
          }
        }

        @media (max-width: 479px) {
          .navigation ul {
            right: 3%;
          }
        }
      `}</style>
    </header>
  );
};

export default MainNavigation;

// @media (max-width: 768px) {
// padding-top: 8px;
// margin-left: 10px;
// }
