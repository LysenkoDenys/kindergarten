import React from 'react';

const IconBtn = ({ Icon, isActive, color, children, ...props }) => {
  return (
    <button
      className={`text-[white] text-[0.75em] cursor-pointer px-[1em] py-[0.5em] rounded-[0.5em] border-[none] ${
        isActive != null ? '' : ''
      } ${color || ''}`}
      {...props}
    >
      <span className={`${children != null ? 'mr-1' : ''}`}>
        <Icon />
      </span>
      {children}
    </button>
  );
};

export default IconBtn;
