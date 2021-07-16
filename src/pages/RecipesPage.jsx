import React, { useContext, useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import { Link } from '../router/Link';
import { routes } from '../routes';
import data from '../recipes.json';
import getAllRecipes from '../api/getAllRecipes';
import { RecipeContext } from '..';

const RecipesPage = () => {
  const [loading, setLoading] = useState(false);
  const { value, setValue } = useContext(RecipeContext);

  console.log('value', value);

  useEffect(() => {
    if (value) {
      return;
    }

    setLoading(true);
    getAllRecipes()
      .then(response => {
        setValue({ allRecords: response.record });
        setLoading(false);
      })
      .catch(err => {
        // to imporove toast notification could be implemented
        // eslint-disable-next-line no-console
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* TODO: tuscias obj visada true, pakeisti */}
      {loading || !value ? (
        <div>loading</div>
      ) : (
        value.allRecords.map(recipe => (
          <Link
            key={recipe.id}
            id={recipe.id}
            to={routes.recipe.buildPath(recipe.id)}
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))
      )}
    </>
  );
};

export default RecipesPage;
