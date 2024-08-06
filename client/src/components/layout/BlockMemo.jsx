// import React, { useRef } from 'react';
import { TiSocialFacebookCircular } from 'react-icons/ti';
import { v4 as uuidv4 } from 'uuid';
import groupMates from '../../data/groupMates';
import { useTheme } from '../../ThemeContext';
// import { motion, useScroll, useTransform } from 'framer-motion';

const BlockMemo = ({ element }) => {
  const index = groupMates.findIndex((el) => el.id === element.id);
  const imageView = groupMates[index].image
    ? groupMates[index].image
    : `undefined.avif`;

  const darkTheme = useTheme();

  const themePhoto = darkTheme
    ? 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-700 hover:border-gray-800 ease-in-out duration-300  shadow-[-2px_1px_2px_2px_rgba(255,255,255,0.8)] hover:shadow-[-4px_1px_1px_1px_rgba(255,255,255,1)] '
    : 'h-[50px] hover:scale-105 cursor-pointer items-center border-2 rounded-[50%] border-solid border-gray-400 hover:border-gray-500 ease-in-out duration-300 shadow-[-5px_1px_5px_5px_rgba(0,0,0,0.4)]';

  const themeBlock = darkTheme
    ? 'bg-[#221f1f] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(255,255,255,0.3)] hover:bg-[#333333] hover:shadow-[3px_3px_5px_2px_rgba(255,255,255,0.3)] select-none text-[#CCCCCC]'
    : 'bg-[#dadbde] rounded-[5px] p-3 mb-4 text-[1em] shadow-[5px_5px_10px_5px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[3px_3px_5px_2px_rgba(0,0,0,0.3)] select-none';

  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ['start end', 'center'],
  // });
  // const opacity = useTransform(scrollYProgress, [0, 1], ['0.3', '1']);

  //================================

  const wordsToHighlight = ['Згадує Васильєв Сергій'];

  function highlightText(text, words) {
    // Create a regex pattern to match any of the words in the array
    const pattern = new RegExp(`(${words.join('|')})`, 'gi');
    const parts = text.split(pattern);

    return parts.map((part) =>
      words.some((word) => word.toLowerCase() === part.toLowerCase()) ? (
        <span
          key={uuidv4()}
          style={{ textDecoration: 'underline', fontWeight: 'bold' }}
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  }
  //================================

  return (
    <div id={groupMates[index].id}>
      {/* <motion.div id={groupMates[index].id} ref={targetRef} style={{ opacity }}> */}
      <div className={themeBlock}>
        {groupMates[index].url ? (
          <a
            href={groupMates[index].url ? groupMates[index].url : '#'}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-start items-center mb-1">
              <img
                src={require(`../../assets/faces/${imageView}`)}
                alt={`my group mate ${groupMates[index].lastName}`}
                className={themePhoto}
              />
              <div
                className={
                  darkTheme
                    ? 'text-[#59b3f3] mx-1 font-bold'
                    : 'text-[#0c5ca1] mx-1 font-bold'
                }
              >
                {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
              </div>
              <TiSocialFacebookCircular className="hover:scale-125 ease-in-out duration-300 mr-1" />
            </div>
          </a>
        ) : (
          <div className="flex justify-start items-center mb-1">
            <img
              src={require(`../../assets/faces/${imageView}`)}
              alt={`my group mate ${groupMates[index].lastName}`}
              className={themePhoto}
            />
            <div className="mx-1 font-bold text-blue-400">
              {`${groupMates[index].lastName} ${groupMates[index].firstName}`}
            </div>
          </div>
        )}
        <div className="font-bold">Спогади:</div>

        <div className="p-1">
          {groupMates[index].story.map((el) => (
            <div key={uuidv4()}>
              <p>&ensp;{highlightText(el.text, wordsToHighlight)}</p>
              <div className="flex justify-center items-center">
                <img
                  src={
                    el.img.length > 0
                      ? require(`../../assets/stories/${el.img}`)
                      : ''
                  }
                  alt={el.img}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </motion.div>
  );
};

export default BlockMemo;
