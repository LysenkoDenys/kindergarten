import { useTheme } from '../../ThemeContext';

const Hamburger = ({ isOpen }) => {
  const darkTheme = useTheme();
  const themeStyles = () => (darkTheme ? '#CCC' : '#333');
  return (
    <>
      <button className="hamburger" aria-label="Toggle navigation menu">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </button>

      <style jsx="true">{`
        .hamburger {
          height: 4rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }
        .hamburger:hover {
          scale: 1.1;
          transition-timing-function: ease-in-out;
          duration: 300;
        }
        .burger {
          width: 1.75rem;
          height: 0.2rem;
          border-radius: 5px;
          margin: 6px 0px 0px 0px;
          background-color: ${themeStyles()};
          transform-origin: 1px;
          transition: all 0.3s linear;
        }
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1};
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      `}</style>
    </>
  );
};

export default Hamburger;
