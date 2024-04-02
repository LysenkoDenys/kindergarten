import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'; //<MdDarkMode />    <MdOutlineDarkMode />
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

  const themeStyles = {
    backgroundColor: darkTheme
      ? 'rgba(0, 0, 0, 0.5)'
      : 'rgba(204, 204, 204, 0.5)',
    color: darkTheme ? '#CCC' : '#333',
    boxShadow: darkTheme
      ? '5px 5px 10px rgba(255, 255, 255, 0.9)'
      : '5px 5px 10px rgba(0, 0, 0, 0.5)',
  };

  return (
    <header
      className="w-full h-20 flex flex-wrap items-center justify-between sticky z-50 px-[5%] py-0 top-0 select-none"
      style={themeStyles}
    >
      <div
        className="text-[2rem] font-bold hover:scale-125 ease-in-out duration-300"
        onClick={closeHamburger}
      >
        <Link className="hover:text-[white]" to="/">
          Berezka
        </Link>
      </div>
      <div className="">
        {darkTheme ? (
          <MdOutlineLightMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-125 ease-in-out duration-300 hover:text-[white]"
          />
        ) : (
          <MdDarkMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px] hover:scale-125 ease-in-out duration-300 hover:text-[white]"
          />
        )}
      </div>
      <nav className="navigation">
        <ul className="list-none flex flex-wrap items-baseline m-0 p-0 md:hidden ">
          <li className="ml-8 hover:scale-125 ease-in-out duration-300">
            <Link
              className="no-underline text-2xl hover:text-[white]"
              to="/"
              onClick={toggleHamburger}
            >
              Home
            </Link>
          </li>
          <li className="ml-8 hover:scale-125 ease-in-out duration-300">
            <Link
              className="no-underline text-2xl hover:text-[white]"
              to="/memo"
              onClick={toggleHamburger}
            >
              Memo
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
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
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(204, 204, 204, 0.5)'};
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
