import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "./MealItem.module.css";

const MealItem = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div className={`${cn.card}`}>
      <div className={cn["card-image"]}>
        <img src={strMealThumb} alt="" />
        <Link to={`/meal/${idMeal}`} className={cn.link} data-title={strMeal} />
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
