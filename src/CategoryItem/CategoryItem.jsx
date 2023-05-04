import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "./CategoryItem.module.css";

const CategoryItem = ({
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) => {
  const cropText = (text, cropNumber) => {
    return text.length < cropNumber || text.indexOf(" ", cropNumber) === -1
      ? text.trim()
      : text.substring(0, text.indexOf(" ", cropNumber)).trim() + " ...";
  };
  return (
    <div className={cn.card}>
      <div className={cn["card-image"]}>
        <img src={strCategoryThumb} alt="" />
        <Link to={`/category/${strCategory}`} className={cn.link} />
      </div>
      <div className={cn["card-content"]}>
        <span className={cn["card-title"]}>{strCategory}</span>
        <p>{cropText(strCategoryDescription, 60)}</p>
      </div>
    </div>
  );
};

CategoryItem.propTypes = {
  strCategory: PropTypes.string,
  strCategoryThumb: PropTypes.string,
  strCategoryDescription: PropTypes.string,
};
export default CategoryItem;
