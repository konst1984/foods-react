import React from "react";
import PropTypes from "prop-types";
import { MealItem } from "../MealItem";
import cn from "./MealList.module.css";

const MealList = ({ meals }) => {
  return (
    <div className={cn.list_meal}>
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
};

MealList.propTypes = {
  meals: PropTypes.array,
};

MealList.defaultProps = {
  meals: [],
};
export default MealList;
