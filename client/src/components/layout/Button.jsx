import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';

const Button = (props) => {
  const darkTheme = useTheme();
  const themeBlock = darkTheme
    ? 'flex items-center justify-center content-center ease-in-out duration-300 p-3 my-3 cursor-pointer bg-gray-700 hover:bg-gray-800 hover:text-white font-bold rounded-[10px] shadow-[2px_2px_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[2px_2px_1px_1px_rgba(255,255,255,1)] text-[1em]'
    : 'flex items-center justify-center content-center ease-in-out duration-300 p-3 my-3 cursor-pointer bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold rounded-[10px] shadow-[5px_5px_5px_5px_rgba(0,0,0,0.4)] hover:shadow-[5px_3px_3px_3px_rgba(0,0,0,0.5)] text-[1em]';
  return (
    <motion.div
      className={themeBlock}
      onClick={props.actionOnClick}
      drag="x"
      dragConstraints={{
        right: 10,
        left: -10,
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {props.label}
    </motion.div>
  );
};

export default Button;
