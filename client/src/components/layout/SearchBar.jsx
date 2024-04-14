import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import Button from './Button';
import { useTheme } from '../../ThemeContext';

const SearchBar = ({ sendDataToParent }) => {
  const [textToSearch, setTextToSearch] = useState('');

  const handleChange = (event) => setTextToSearch(event.target.value);

  function handleClick() {
    sendDataToParent(textToSearch);
    setTextToSearch('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  useEffect(() => {
    // Add event listener for key press on component mount
    document.addEventListener('keydown', handleKeyPress);
    // Remove event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textToSearch]); // Empty dependency array to ensure effect only runs once on mount

  const darkTheme = useTheme();

  const themeInput = darkTheme
    ? 'flex p-3 bg-white rounded-[10px] w-[50%] mr-1 my-3 shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] text-black'
    : 'flex p-3 bg-white rounded-[10px] w-[50%] mr-1 my-3 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)]';

  return (
    <div className="flex justify-center items-center">
      <div className={themeInput}>
        <FiSearch className="text-[25px]" />
        <input
          type="text"
          placeholder="Пошук..."
          className="w-[90%] px-1 outline-none"
          value={textToSearch}
          onChange={handleChange}
        />
      </div>
      <Button className="" label={'Знайти'} actionOnClick={handleClick} />
    </div>
  );
};

export default SearchBar;
