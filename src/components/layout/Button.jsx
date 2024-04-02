import { useTheme } from '../../ThemeContext';

const Button = (props) => {
  console.log(props); //
  const darkTheme = useTheme();
  const themeBlock = darkTheme
    ? 'flex items-center justify-between ease-in-out duration-300 p-2 m-1 cursor-pointer bg-gray-700 hover:bg-gray-800 hover:text-white font-bold rounded-[5px] shadow-[3px_3px_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_1px_1px_rgba(255,255,255,1)]'
    : 'flex items-center justify-between ease-in-out duration-300 p-2 m-1 cursor-pointer bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold rounded-[5px] shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)] hover:shadow-[5px_3px_3px_3px_rgba(0,0,0,0.5)]';
  return (
    <div className={themeBlock} onClick={props.actionOnClick}>
      {props.label}
    </div>
  );
};

export default Button;
