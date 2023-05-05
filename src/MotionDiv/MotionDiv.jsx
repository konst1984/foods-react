import React from 'react';
import { useLocation } from 'react-router-dom';
import {motion as m, AnimatePresence} from 'framer-motion'

const MotionDiv = ({children}) => {
  const {pathname} = useLocation();

  return (
    <AnimatePresence initial={false}>
      <m.div key={pathname} initial = {{opacity: 0, transform: "translateX(-10%)"}}
             animate = {{opacity: 1, transform: "translateX(0%)"}} transition = {{duration: 1, ease: 'easeOut'}}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export default MotionDiv;