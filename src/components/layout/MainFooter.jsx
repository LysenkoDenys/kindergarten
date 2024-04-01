import React from 'react';
import { useTheme } from '../../ThemeContext';

const MainFooter = () => {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
  };

  return (
    <div
      className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
      style={themeStyles}
    >
      MainFooter
    </div>
  );
};

export default MainFooter;
