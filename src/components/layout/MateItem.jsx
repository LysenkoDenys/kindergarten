import React from 'react';
import groupMates from '../../data/groupMates';

const MateItem = () => {
  return (
    <div className="flex items-center bg-green-700 hover:bg-green-900 hover:text-white  font-bold py-2 px-2 m-3 rounded-[5px] shadow hover:shadow-lg cursor-pointer">
      <img
        src={require(`../../assets/faces/${groupMates[0].image}`)}
        alt={`my group mate ${groupMates[0].lastName}`}
        className="h-[50px] rounded-[50%] bg-white hover:scale-105 
        @apply cursor-pointer items-center border rounded-[50%] border-solid border-[green-100] border-2 ease-in-out duration-300"
      />
      <div className="p-1">{`${groupMates[0].lastName} ${groupMates[0].firstName}`}</div>
    </div>
  );
};

export default MateItem;
