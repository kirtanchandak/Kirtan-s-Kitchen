import axios, * as others from "axios";
import { useState } from "react";
import "./App.css";
import RecipeTile from "./components/RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const YOUR_APP_ID = "584b231e";
  const YOUR_APP_KEY = "6cf2ed2ae31acfb166902e3802db08b3";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  async function getRecipies() {
    let result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipies();
  };

  return (
    <div className="App">
      <div className="main flex justify-center items-center flex-col p-10">
        <h1 className="text-5xl">Kirtan's Kitchen 🍕</h1>
        <form className="searchBar p-7 flex space-x-5">
          <input
            className="p-1 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-700"
            type="text"
            placeholder="enter ingridient"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <input
            type="submit"
            value="Search"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={onSubmit}
          />
        </form>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
