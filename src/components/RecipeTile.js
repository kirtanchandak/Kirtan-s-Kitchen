import React from "react";

function RecipeTile({ recipe }) {
  let link = recipe["recipe"]["url"];
  return (
    <div className="">
      <a href={link}>
        <img
          src={recipe["recipe"]["image"]}
          alt=""
          className="flex w-96 h-96 object-cover rounded-sm"
        />
      </a>
      <p className="text-center mt-6 text-2xl">{recipe["recipe"]["label"]}</p>
    </div>
  );
}

export default RecipeTile;
