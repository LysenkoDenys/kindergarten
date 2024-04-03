import {
  TiSocialAtCircular,
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import Block from './Block';
import Author from './Author';

const MainFooter = () => {
  const iconStyle = 'hover:scale-110 ease-in-out duration-300 mr-1';

  return (
    <Block>
      <div className="flex flex-wrap items-center justify-around ">
        <div className="flex text-[50px] cursor-pointer">
          <a href="mailto:lysenkoden@gmail.com">
            <TiSocialAtCircular className={iconStyle} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100001281440746"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialFacebookCircular className={iconStyle} />
          </a>
          <a
            href="https://www.linkedin.com/in/lysenko-denys/"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialLinkedinCircular className={iconStyle} />
          </a>
        </div>
        <div className="flex">
          <Author />
        </div>
      </div>
    </Block>
  );
};

export default MainFooter;
