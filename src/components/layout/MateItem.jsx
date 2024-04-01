import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowFatRightBold } from 'react-icons/pi';
import groupMates from '../../data/groupMates';
import { useTheme } from '../../ThemeContext';

const MateItem = ({ element }) => {
  const index = groupMates.findIndex((el) => el.id === element.id);
  const imageView = groupMates[index].image
    ? groupMates[index].image
    : `undefined.jpg`;

  const darkTheme = useTheme();

  const themePhoto = darkTheme
    ? 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-700 hover:border-gray-800 ease-in-out duration-300 absolute left-0 top-0 z-[1] shadow-[-2px_1px_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[-4px_1px_1px_1px_rgba(255,255,255,1)] hover:translate-x-[5px]'
    : 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-400 hover:border-gray-500 ease-in-out duration-300 absolute left-0 top-0 z-[1] shadow-[-5px_1px_5px_5px_rgba(0,0,0,0.4)] hover:translate-x-[5px]';

  const themeBlock = darkTheme
    ? 'flex items-center justify-between ease-in-out duration-300 pl-5 pr-1 ml-9 cursor-pointer bg-gray-700 hover:bg-gray-800 hover:text-white font-bold rounded-[5px] shadow-[0_3px_3px_3px_rgba(255,255,255,0.8)] hover:shadow-[0_2px_2px_2px_rgba(255,255,255,1)] hover:translate-x-[5px]'
    : 'flex items-center justify-between ease-in-out duration-300 pl-5 pr-1 ml-9 cursor-pointer bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold   rounded-[5px] shadow-[0_10px_10px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_5px_5px_5px_rgba(0,0,0,0.5)] hover:translate-x-[5px]';

  return (
    <div className="relative pr-3 py-3 mb-[2%]">
      <Link to="/memo">
        <div>
          <img
            src={require(`../../assets/faces/${imageView}`)}
            alt={`my group mate ${groupMates[index].lastName}`}
            className={themePhoto}
          />
        </div>
        <div className={themeBlock}>
          {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
          <PiArrowFatRightBold className="mx-1" />
        </div>
      </Link>
    </div>
  );
};

export default MateItem;
