import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Recipes from './recipe';

const App = () => {
  const APP_ID = "b33fcf82"
  const APP_KEYS = "c3d4a6ff31e15da58a34113ccc8d4b16"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(" ");
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getData();
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value)
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch(" ")

  }


  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`);
    const data = await response.json();
    console.log('running')
    // console.log(data.hits);
    setRecipes(data.hits)

  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} >

        </input>
        <button className="search-button" type="sumbit">Search</button>
      </form>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            img={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />

        ))}
      </div>

    </div>
  )
}

export default App;
