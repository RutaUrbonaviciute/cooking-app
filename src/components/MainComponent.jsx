import React, { useState } from 'react';
import NavigationMobile from './NavigationMobile.jsx';
import RecipeCard from './RecipeCard.jsx';
import RecipePage from '../pages/RecipePage.jsx';
import { recipes } from '../recipesText.js';

const MainComponent = () => {
  const [showRecipePage, setShowRecipePage] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  function handleOpenRecipePage(recipe) {
    setShowRecipePage(true);
    setSelectedRecipe(recipe);
  }

  function handleCloseRecipePage() {
    setShowRecipePage(false);
  }

  return (
    <div className="bg-yellow-lightest text-gray-darkest box-border p-4 md:bg-purple-100 lg:bg-purple-200">
      <h1 className="text-xl font-semibold pb-4"> Kas pietums</h1>
      {showRecipePage ? (
        <RecipePage onClick={handleCloseRecipePage} recipe={selectedRecipe} />
      ) : (
        recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={handleOpenRecipePage}
          />
        ))
      )}
      <NavigationMobile />
    </div>
  );
};

export default MainComponent;
