import React from 'react';
import { useTheme } from '../../ThemeContext';

const Block = (props) => {
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
  };

  return (
    <div
      className="bg-[#e6e7eb] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[3px_3px_5px_2px_rgba(0,0,0,0.3)] select-none"
      style={themeStyles}
    >
      {props.children}
    </div>
  );
};

export default Block;
