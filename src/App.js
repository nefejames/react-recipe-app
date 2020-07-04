import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      const res = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await res.json();
      setRecipes(data.hits);
    };

    fetchRecipes();
  }, [query]);

  //update search on input
  const updateSearch = (e) => setsearchTerm(e.target.value);

  //Submit Form
  const submitForm = (e) => {
    e.preventDefault();
    setQuery(searchTerm);
    setsearchTerm("");

    console.log(process.env.APP_ID);
    console.log(process.env.APP_KEY);
  };

  return (
    <Fragment>
      <Header></Header>
      <main>
        <Form updateSearch={updateSearch} submitForm={submitForm}></Form>
        <div className="container">
          {recipes.map((recipe) => (
            <Recipes
              key={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              title={recipe.recipe.label}
            ></Recipes>
          ))}
        </div>
      </main>
    </Fragment>
  );
};

export default App;
