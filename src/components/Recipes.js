import React from "react";

const RecipeList = ({ image, ingredients, title }) => {
  return (
    <div className="recipe-box">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeList;
