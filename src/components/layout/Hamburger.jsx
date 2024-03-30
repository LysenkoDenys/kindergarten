import { useTheme } from '../../ThemeContext';

const Hamburger = ({ isOpen }) => {
  const darkTheme = useTheme();
  const themeStyles = () => (darkTheme ? '#CCC' : '#333');
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx="true">{`
        .hamburger {
          width: 2.5rem;
          height: 4rem;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
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
