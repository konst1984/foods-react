import { useEffect, useState } from "react";
import cn from "./ArrowUp.module.css";

const ArrowTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibleArrow = () => {
    const position = document.documentElement.scrollTop;
    if (position > 1000) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleArrow);
    return () => window.removeEventListener("scroll", handleVisibleArrow);
  });

  return (
    <>
      {isVisible && (
        <button className={cn["arrow-box"]} onClick={scrollTop}>
          <div className={cn.image}>↑</div>
        </button>
      )}
    </>
  );
};

export default ArrowTop;
