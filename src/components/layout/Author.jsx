import { FaRegHeart } from 'react-icons/fa6';

const Author = () => {
  return (
    <div className="text-[0.8em] my-1 hover:scale-110 ease-in-out duration-300">
      <a
        className="flex flex-wrap items-center"
        href="mailto:lysenkoden@gmail.com"
      >
        Made with <FaRegHeart className="mx-1" /> by Lysenko Denys | 2024
        {new Date().getFullYear() === 2024
          ? ''
          : '-' + new Date().getFullYear()}
      </a>
    </div>
  );
};

export default Author;
