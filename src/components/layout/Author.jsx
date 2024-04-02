import { FaRegHeart } from 'react-icons/fa6';

const Author = () => {
  return (
    <div className="text-[0.8em] my-1">
      <a
        className="flex flex-wrap items-center"
        href="https://www.linkedin.com/in/lysenko-denys/"
        target="_blank"
        rel="noreferrer"
      >
        Made with <FaRegHeart className="mx-1" /> by Lysenko Denys 2024
      </a>
    </div>
  );
};

export default Author;
