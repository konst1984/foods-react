import React from "react";
import {MotionDiv} from '../MotionDiv'

const Main = ({children}) => {
  return (
    <div className = "container content">
      <MotionDiv>
        {children}
      </MotionDiv>
    </div>
  );
};

export default Main;
