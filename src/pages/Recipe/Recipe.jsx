import React, { useEffect, useState } from "react";
import { getMealById } from "../../api";
import { useParams, useNavigate } from "react-router-dom";
import { Preloader } from "../../Preloader";

const Recipe = () => {
  const { id } = useParams();
  const goBack = useNavigate();
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return recipe ? (
    <>
      <div className="card">
        <div className="card-image">
          <img src={recipe.strMealThumb} alt="" />
        </div>
        <div className="card-content">
          <span className="card-title black-text">{recipe.strMeal}</span>
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p className="describe">{recipe.strInstructions}</p>
          <table className="centered">
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
              <h5 className="title-recipe">Video recipe</h5>
              <iframe
                width="100%"
                height="500px"
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
              />
            </div>
          ) : null}
        </div>
      </div>
      <button className="btn" onClick={() => goBack(-1)}>
        Go back
      </button>
    </>
  ) : (
    <Preloader />
  );
};

export default Recipe;
