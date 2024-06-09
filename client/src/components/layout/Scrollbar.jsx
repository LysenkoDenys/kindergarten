import { useScroll, motion, useSpring, useTransform } from 'framer-motion';
import React from 'react';

const Scrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgb(0,153,76)', 'rgb(255,0,0)']
  );

  return (
    <>
      <motion.div
        className="sticky top-0 w-full h-1 origin-left rounded-md"
        style={{ scaleX, background }}
      ></motion.div>
    </>
  );
};

export default Scrollbar;
