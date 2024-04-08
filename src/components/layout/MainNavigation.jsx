import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { FaRegCommentDots } from 'react-icons/fa6';
import Hamburger from './Hamburger';
import { useTheme, useThemeUpdate } from '../../ThemeContext';

const MainNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeHeader = darkTheme
    ? 'w-full h-20 flex flex-wrap items-center justify-between sticky z-50 px-[5%] py-0 top-0 select-none bg-[rgba(0,0,0,0.5)] text-[#CCCCCC] shadow-[5px_5px_10px_rgba(255,255,255,0.9)]'
    : 'w-full h-20 flex flex-wrap items-center justify-between sticky z-50 px-[5%] py-0 top-0 select-none bg-[rgba(204,204,204,0.5)] text-[#333333] shadow-[5px_5px_10px_rgba(0,0,0,0.5)]';

  const themeLink = darkTheme
    ? 'no-underline text-2xl hover:text-gray-400'
    : 'no-underline text-2xl hover:text-black';

  const toTheComments = () => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the '#' character
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  };

  return (
    <header className={themeHeader}>
      <div
        className="text-[2rem] font-bold hover:scale-110 ease-in-out duration-300"
        onClick={closeHamburger}
      >
        <Link className={themeLink} to="/">
          Berizka
        </Link>
      </div>
      <div className="">
        {darkTheme ? (
          <MdOutlineLightMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300 hover:text-gray-400"
          />
        ) : (
          <MdDarkMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300 hover:text-black"
          />
        )}
      </div>
      {/* ============================== */}
      <div className="" onClick={toTheComments}>
        <Link to={'/#comments'}>
          <FaRegCommentDots className="cursor-pointer text-[30px] hover:scale-110 ease-in-out duration-300" />
        </Link>
        {/* ============================== */}
      </div>
      <nav className="navigation">
        <ul className="list-none flex flex-wrap items-baseline m-0 p-0 md:hidden ">
          <li className="ml-8 hover:scale-110 ease-in-out duration-300">
            <Link className={themeLink} to="/" onClick={toggleHamburger}>
              Home
            </Link>
          </li>
          <li className="ml-8 hover:scale-110 ease-in-out duration-300">
            <Link className={themeLink} to="/memo" onClick={toggleHamburger}>
              Memo
            </Link>
          </li>
        </ul>
        <div className="hamburger cursor-pointer" onClick={toggleHamburger}>
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
          gap: 0;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
          margin: 20px 0px 20px 10px;
        }

        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 768px) {
          .hamburger {
            display: block;
            padding-top: 8px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigation ul {
            display: ${hamburgerOpen ? 'inline' : 'none'};
            background-color: ${darkTheme
              ? 'rgba(0, 0, 0, 0.8)'
              : 'rgba(204, 204, 204, 0.8)'};
            border-radius: 3px;
            padding-right: 20px;
            position: fixed;
            height: auto;
            width: auto;
            top: 90px;
            right: 6%;
            overflow: auto;
            box-shadow: 2px 2px 2px #333333;
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
