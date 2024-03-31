import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowFatRightBold } from 'react-icons/pi';
import groupMates from '../../data/groupMates';

const MateItem = ({ element }) => {
  const index = groupMates.findIndex((el) => el.id === element.id);
  const imageView = groupMates[index].image
    ? groupMates[index].image
    : `undefined.jpg`;

  console.log(imageView); //

  return (
    <div className="relative pr-3 py-3 mb-[2%]">
      <Link to="/memo">
        <div>
          <img
            src={require(`../../assets/faces/${imageView}`)}
            alt={`my group mate ${groupMates[index].lastName}`}
            className="h-[50px] bg-white hover:scale-105 cursor-pointer items-center border rounded-[50%] border-solid border-green-700 ease-in-out duration-300 absolute left-0 top-0 z-[1]"
          />
        </div>
        <div className="flex items-center justify-between pl-4 pr-1 ml-9 cursor-pointer bg-green-700 hover:bg-green-900 hover:text-white  font-bold  shadow hover:shadow-lg rounded-[5px]">
          {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
          <PiArrowFatRightBold />
        </div>
      </Link>
    </div>
  );
};

export default MateItem;
