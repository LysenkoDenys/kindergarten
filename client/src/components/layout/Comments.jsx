import { useState } from 'react';
import { useTheme } from '../../ThemeContext';
import Block from './Block';
import Button from './Button';

const Comments = () => {
  const [text, setText] = useState('');
  const darkTheme = useTheme();
  const themeComment = darkTheme
    ? 'px-3 rounded-[15px] w-[70%] mr-1 my-3 shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] text-black'
    : 'px-3 rounded-[15px] w-[70%] mr-1 my-3 shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)]';

  const handleChange = (event) => setText(event.target.value);

  return (
    <Block>
      <div className="flex justify-center items-center" id="comments">
        <textarea
          className={themeComment}
          placeholder="Текст коментаря..."
          value={text}
          onChange={handleChange}
        />
        <Button
          label="Коментувати"
          actionOnClick={() => {
            text && alert(text);
            setText('');
          }}
        />
      </div>
    </Block>
  );
};

export default Comments;