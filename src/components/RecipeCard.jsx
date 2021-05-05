import React from 'react';
import RecipeInfo from './RecipeInfo.jsx';

const RecipeCard = ({ onClick, recipe }) => {
  const { name, prepTime, peopleNumber, imgLink } = recipe;

  return (
    <button
      onClick={() => {
        onClick(recipe);
      }}
    >
      <div className="bg-white p-4 mb-4 flex flex-col justify-center items-center rounded-lg shadow-xl">
        <div className="w-full text-left">
          <h2 className="text-2xl">{name}</h2>
        </div>

        <RecipeInfo prepTime={prepTime} peopleNumber={peopleNumber} />

        <div className="w-full h-60 mt-2 mb-2">
          <img
            src={imgLink}
            alt="food image"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </button>
  );
};

export default RecipeCard;
