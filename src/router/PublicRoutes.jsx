import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../pages/HomePage';
import RecipePage from '../pages/RecipePage';
import RecipesPage from '../pages/RecipesPage';
import { routes } from '../routes';
import { Route } from './Route';
import { useRouter } from './RouterContext';
import data from '../recipes.json';
import CreateRecipePage from '../pages/CreateRecipePage';
import { RecipeContext } from '..';

const PublicRoutes = () => {
  const { route } = useRouter();
  const { value } = useContext(RecipeContext);

  return (
    <>
      <Route path={routes.home.path}>
        <HomePage />
      </Route>

      <Route path={routes.recipes.path}>
        <RecipesPage />
      </Route>

      <Route path={routes.addRecipe.path}>
        <CreateRecipePage />
      </Route>

      <Route path={routes.recipe.buildPath(route.props.id)}>
        <>
          {value ? (
            <RecipePage
              recipe={value.find(recipe => `${recipe.id}` === route.props.id)}
            />
          ) : null}
        </>
      </Route>
    </>
  );
};

export default PublicRoutes;
