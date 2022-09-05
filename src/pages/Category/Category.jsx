import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../../api";
import { Preloader } from "../../Preloader";
import { MealList } from "../../MealList";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const goBack = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);
  return (
    <>
      <button className="btn" onClick={() => goBack(-1)}>
        Go back
      </button>
      {meals.length ? <MealList meals={meals} /> : <Preloader />}
    </>
  );
};

export default Category;
