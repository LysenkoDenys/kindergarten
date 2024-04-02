import React from 'react';

import Block from './Block';
import Author from './Author';

const MainFooter = () => {
  return (
    <Block>
      <div className="flex flex-wrap items-center justify-around ">
        <div className="">mail fb in</div>
        <div className="flex">
          <Author />
        </div>
      </div>
    </Block>
  );
};

export default MainFooter;
