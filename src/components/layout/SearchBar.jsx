import { useState } from 'react';
import Button from './Button';
import { useTheme } from '../../ThemeContext';

const SearchBar = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => setText(event.target.value);

  const darkTheme = useTheme();
  const themeInput = darkTheme
    ? 'p-3 rounded-[15px] w-[30%] mr-1 my-3 shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] text-black'
    : 'p-3 rounded-[15px] w-[30%] mr-1 my-3 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)]';

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Ім'я або прізвище"
        className={themeInput}
        value={text}
        onChange={handleChange}
      />
      <Button
        className=""
        label={'Знайти'}
        actionOnClick={() => {
          text && alert(text);
          setText('');
        }}
      />
    </div>
  );
};

export default SearchBar;
