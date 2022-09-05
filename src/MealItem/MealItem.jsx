import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MealItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title black-text">{strMeal}</span>
      </div>
      <div className="card-action">
        <Link to={`/foods-react/meal/${idMeal}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
};

MealItem.propTypes = {
  idMeal: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
};

export default MealItem;
