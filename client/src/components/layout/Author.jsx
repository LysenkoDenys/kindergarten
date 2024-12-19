import { FaHeart } from 'react-icons/fa6';

const Author = () => {
  const currentYear = new Date().getFullYear() || 2024;
  const yearText = currentYear === 2024 ? '' : ` - ${currentYear}`;
  return (
    <div className="text-[0.8em] my-1 hover:scale-110 ease-in-out duration-300">
      <a
        className="flex flex-wrap items-center"
        href="mailto:lysenkoden@gmail.com"
        title="mail to the author"
      >
        Made with{' '}
        <FaHeart
          className="mx-1 text-red-500"
          style={{ width: '1em', height: '1em' }}
          aria-label="heart icon"
        />{' '}
        by Lysenko Denys | 2024{yearText}
      </a>
    </div>
  );
};

export default Author;
