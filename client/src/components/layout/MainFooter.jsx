import {
  TiSocialAtCircular,
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
} from 'react-icons/ti';

import Block from './Block';
import Author from './Author';

const MainFooter = () => {
  const iconStyle =
    'w-[50px] h-[50px] hover:scale-110 ease-in-out duration-300 mr-2';

  return (
    <Block>
      <div className="flex flex-wrap items-center justify-around" id="footer">
        <div className="flex text-[50px] leading-[50px] cursor-pointer">
          <a href="mailto:lysenkoden@gmail.com" aria-label="Email Link">
            <TiSocialAtCircular
              className={iconStyle}
              title="Email Lysenko Denys"
              style={{ width: 50, height: 50 }}
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100001281440746"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Link"
          >
            <TiSocialFacebookCircular
              className={iconStyle}
              title="Facebook Profile"
              style={{ width: 50, height: 50 }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lysenko-denys/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Link"
          >
            <TiSocialLinkedinCircular
              className={iconStyle}
              title="LinkedIn Profile"
              style={{ width: 50, height: 50 }}
            />
          </a>
        </div>
        <div className="flex">
          <Author className="h-[20px]" />
        </div>
      </div>
    </Block>
  );
};

export default MainFooter;
