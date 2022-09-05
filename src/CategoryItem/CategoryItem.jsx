import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title black-text">{strCategory}</span>
        <p>{cropText(strCategoryDescription, 60)}</p>
      </div>
      <div className="card-action">
        <Link to={`/foods-react/category/${strCategory}`} className="btn">
          Watch category
        </Link>
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
