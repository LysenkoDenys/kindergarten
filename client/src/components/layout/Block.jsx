import React from 'react';
import { useTheme } from '../../ThemeContext';

const Block = (props) => {
  const darkTheme = useTheme();

  const themeBlock = darkTheme
    ? 'bg-[#221f1f] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(255,255,255,0.3)] hover:bg-[#333333] hover:shadow-[3px_3px_5px_2px_rgba(255,255,255,0.3)] select-none text-[#CCCCCC]'
    : 'bg-[#dadbde] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[3px_3px_5px_2px_rgba(0,0,0,0.3)] select-none';

  return <div className={themeBlock}>{props.children}</div>;
};

export default Block;
