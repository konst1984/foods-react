import React from "react";
import { ButtonBack } from "../ButtonBack";
import cn from "./ErrorWrapper.module.css";
import { useLocation } from "react-router-dom";

const ErrorWrapper = ({ error, children }) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      {error ? (
        <>
          <div className={cn.error}>
            <span>Something went wrong, we will fix it soon</span>
            {pathname !== "/" ? <ButtonBack /> : <span>Come back later</span>}
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
};

export default ErrorWrapper;
