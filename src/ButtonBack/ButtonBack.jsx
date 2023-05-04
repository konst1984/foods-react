import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const goBack = useNavigate();
  return (
    <button className="btn" onClick={() => goBack(-1)}>
      Go back
    </button>
  );
};

export default ButtonBack;
