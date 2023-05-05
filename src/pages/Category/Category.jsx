import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import { Preloader } from "../../Preloader";
import { MealList } from "../../MealList";
import { ButtonBack } from "../../ButtonBack";
import { ErrorWrapper } from "../../ErrorWrapper";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getFilteredCategory(name)
      .then((data) => setMeals(data.meals))
      .catch((e) => setError(true));
  }, [name]);
  return (
    <ErrorWrapper error={error}>
      >
      <ButtonBack />
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </ErrorWrapper>
  );
};

export default Category;
