import React from 'react';
import { useTheme } from '../../ThemeContext';

const Button = () => {
  const themeBlock = darkTheme
    ? 'flex items-center justify-between ease-in-out duration-300 pl-5 pr-1 ml-9 cursor-pointer bg-gray-700 hover:bg-gray-800 hover:text-white font-bold rounded-[5px] shadow-[0_3px_3px_3px_rgba(255,255,255,0.8)] hover:shadow-[0_2px_2px_2px_rgba(255,255,255,1)] hover:translate-x-[5px]'
    : 'flex items-center justify-between ease-in-out duration-300 pl-5 pr-1 ml-9 cursor-pointer bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold   rounded-[5px] shadow-[0_10px_10px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)] hover:translate-x-[5px]';
  return <div>Button</div>;
};

export default Button;
