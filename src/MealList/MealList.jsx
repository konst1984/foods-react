import React from "react";
import PropTypes from "prop-types";
import { MealItem } from "../MealItem";

const MealList = ({ meals }) => {
  return (
    <div className="list">
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
