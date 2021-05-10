import React from 'react';
import RecipeCard from '../components/RecipeCard';
import { recipes } from '../recipesText';
import { Link } from '../router/Link';
import { routes } from '../routes';

const RecipesPage = () => {
  return (
    <>
      {recipes.map(recipe => (
        <Link key={recipe.id} to={routes.recipe.path}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </>
  );
};

export default RecipesPage;
