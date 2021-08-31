import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "2eb760d1";
  const APP_KEY = "a5e7830e843687eca5146177932b4855";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      { recipes.map((recipe) =>(
        <Recipe
          key={recipe.recipe.url}     //TODO Change this to a unique key
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          servings={recipe.recipe.yield}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url} />
      ))}
      </div>
    </div>
  );
}

export default App;