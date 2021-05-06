import React from 'react';
import Icon from '../components/Icons/Icon.jsx';
import RecipeInfo from '../components/RecipeInfo.jsx';

const RecipePage = ({ onClick, recipe }) => {
  const {
    name,
    prepTime,
    peopleNumber,
    imgLink,
    ingredients,
    prepSteps,
  } = recipe;

  return (
    <>
      <button
        className="p-1 rounded-full hover:bg-yellow-light"
        onClick={onClick}
      >
        <Icon
          iconStyles="h-6 w-6 stroke-current text-yellow-darkest"
          iconId="arrow-left"
        />
      </button>

      <div className="w-full text-left">
        {/* nesikeicia font weight */}
        <h2 className="text-2xl font-thin">{name}</h2>
      </div>

      <RecipeInfo prepTime={prepTime} peopleNumber={peopleNumber} />

      <div className="w-full h-60 mt-2 mb-2">
        <img
          src={imgLink}
          alt="food image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="my-4">
        <div>Ingredients</div>
        {ingredients.map(ingredient => (
          <div className="flex items-center p-1">
            <Icon
              iconStyles="h-3 w-3 fill-current text-yellow-light"
              iconId="circle"
            />
            <div className="ml-2">{ingredient}</div>
          </div>
        ))}
      </div>
      <div>Preparation</div>
      {prepSteps.map((step, index) => (
        <div className="flex p-1">
          <div className="text-yellow-darkest">{index + 1}.</div>
          <div className="mx-2 text-justify">{step}</div>
        </div>
      ))}
    </>
  );
};

export default RecipePage;
