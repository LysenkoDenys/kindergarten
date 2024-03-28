import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md'; //<MdDarkMode />    <MdOutlineDarkMode />
import Hamburger from './Hamburger';
import { useTheme, useThemeUpdate } from '../../ThemeContext';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // theme=================================
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
  };
  // theme=================================

  return (
    <header className={classes.header} style={themeStyles}>
      <div className="font-[2rem] font-bold">
        <Link to="/">Berezka</Link>
      </div>
      <div className="">
        {darkTheme ? (
          <MdDarkMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px]"
          />
        ) : (
          <MdOutlineDarkMode
            onClick={toggleTheme}
            className="cursor-pointer text-[30px]"
          />
        )}
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/" onClick={toggleHamburger}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/memo" onClick={toggleHamburger}>
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
            background-color: #878477;
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
