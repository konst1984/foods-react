import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import { Preloader } from "../../Preloader";
import { MealList } from "../../MealList";
import { ButtonBack } from "../../ButtonBack";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      <ButtonBack />
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </>
  );
};

export default Category;
