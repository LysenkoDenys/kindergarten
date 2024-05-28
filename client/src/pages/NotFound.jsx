import React from 'react';
import Block from '../components/layout/Block';

const NotFound = () => {
  return (
    <div className="mt-4">
      <Block>
        <article>
          <h1 className="text-[36px] text-center font-bold">
            404 - Page not found
          </h1>
          <p className="text-[24px] text-center">
            Sorry, the page you are looking for could not be found.
          </p>
        </article>
      </Block>
    </div>
  );
};

export default NotFound;
