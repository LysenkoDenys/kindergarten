import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCloseCircleOutline } from 'react-icons/io5';
import Button from './Button';
import { useTheme } from '../../ThemeContext';

const SearchBar = (props) => {
  const [textToSearch, setTextToSearch] = useState('');

  const handleChange = (event) => setTextToSearch(event.target.value);

  function handleFindClick() {
    props.sendDataToParent(textToSearch);
  }

  function handleResetClick() {
    setTextToSearch('');
    props.sendDataToParent('');
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleFindClick();
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
  }, [textToSearch]);

  const darkTheme = useTheme();

  const themeInput = darkTheme
    ? 'flex items-center p-3  bg-white rounded-[10px] w-[50%] mr-2 my-3 shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] text-black'
    : 'flex items-center p-3 bg-white rounded-[10px] w-[50%] mr-2 my-3 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)]';

  return (
    <div className="flex justify-center items-center" id="search">
      <div className={themeInput}>
        <FiSearch className="text-[25px] text-gray-400" />
        <input
          type="text"
          placeholder="Пошук..."
          className="w-[90%] px-1 outline-none"
          value={textToSearch}
          onChange={handleChange}
        />
        {textToSearch && (
          <IoCloseCircleOutline
            className="text-[25px] cursor-pointer"
            onClick={handleResetClick}
            title="очистити поле пошуку"
          />
        )}
      </div>
      <Button label="Знайти" actionOnClick={handleFindClick} />
    </div>
  );
};

export default SearchBar;
