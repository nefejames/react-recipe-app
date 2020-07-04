import React from "react";

const Recipe = ({ image, ingredients, title }) => {
  return (
    <section className="meal">
      <img src={image} alt="" />
      <div className="recipe">
        <h2>{title}</h2>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Recipe;
