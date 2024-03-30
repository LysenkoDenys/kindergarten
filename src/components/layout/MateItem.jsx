import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowFatRightBold } from 'react-icons/pi';
import groupMates from '../../data/groupMates';

const MateItem = () => {
  return (
    <div className="relative pr-3 py-3 mb-[1%]">
      <Link to="/memo">
        <div>
          <img
            src={require(`../../assets/faces/${groupMates[0].image}`)}
            alt={`my group mate ${groupMates[0].lastName}`}
            className="h-[50px] rounded-[50%] bg-white hover:scale-105 cursor-pointer items-center border rounded-[50%] border-solid border-green-700 border-2 ease-in-out duration-300 cursor-pointer absolute left-0 top-0"
          />
        </div>
        <div className="flex items-center pl-4 pr-1 ml-9 cursor-pointer bg-green-700 hover:bg-green-900 hover:text-white  font-bold  shadow hover:shadow-lg rounded-[5px]">
          {`${groupMates[0].lastName} ${groupMates[0].firstName}`}
          <PiArrowFatRightBold />
        </div>
      </Link>
    </div>
  );
};

export default MateItem;
