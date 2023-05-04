import React, { useEffect, useState } from "react";
import { getMealById } from "../../api";
import { useParams } from "react-router-dom";
import { Preloader } from "../../Preloader";
import cn from "./Recipe.module.css";
import { ButtonBack } from "../../ButtonBack";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return recipe ? (
    <>
      <div className={cn.card}>
        <div className={cn["card-image"]}>
          <img src={recipe.strMealThumb} alt="" />
          <div className={cn["card-describe"]}>
            <h3 className={cn["card-title"]}>{recipe.strMeal}</h3>
            <h4>Category: {recipe.strCategory}</h4>
            {recipe.strArea ? <h4>Area: {recipe.strArea}</h4> : null}
            <p className={cn.describe}>{recipe.strInstructions}</p>
          </div>
        </div>
        <div className={cn["card-recipe"]}>
          <table className={cn.centered}>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h4 className={cn["title-recipe"]}>Video recipe</h4>
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
                loading="lazy"
              />
            </div>
          ) : null}
        </div>
      </div>
      <ButtonBack />
    </>
  ) : (
    <Preloader />
  );
};

export default Recipe;
