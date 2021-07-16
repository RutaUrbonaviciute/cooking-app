import React, { useContext } from 'react';
import Icon from '../components/Icons/Icon.jsx';
import RecipeInfo from '../components/RecipeInfo.jsx';
import { Link } from '../router/Link';
import { routes } from '../routes';
import { useRouter } from '../router/RouterContext';
import { RecipeContext } from '../index.jsx';
import updateBin from '../api/updateBin';
import { history } from '../router/RouterContext';

const RecipePage = ({ recipe }) => {
  const { value, setValue } = useContext(RecipeContext);

  const { id, name, prepTime, peopleNumber, imgLink, ingredients, prepSteps } =
    recipe;

  console.log(recipe);

  const { route } = useRouter();

  const handleEditRecipe = () => {
    setValue({ ...value, editableRecipe: recipe });
    history.push('/edit');
  };

  const handleDeleteRecipe = () => {
    console.log(value);
    const filteredRecipes = value.allRecords.filter(item => item.id !== id);

    updateBin(filteredRecipes)
      .then(res => {
        history.push('/recipes');
        setValue({ allRecipes: res.record });
      })
      .catch(err => {
        // to imporove toast notification could be implemented
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <>
      <div className="p-2 mb-6 flex justify-between items-center border-b-2 border-yellow-light">
        <Link to={routes.recipes.path}>
          <div className="p-1 rounded-full hover:bg-yellow-light">
            <Icon
              iconStyles="h-6 w-6 stroke-current text-yellow-darkest"
              iconId="arrow-left"
            />
          </div>
        </Link>

        <div className="flex justify-between items-center">
          <button onClick={handleEditRecipe} className="mr-2">
            <Icon
              iconId="edit"
              iconStyles="h-7 w-7 fill-current text-yellow-darkest group-hover:text-white"
            />
          </button>

          <button onClick={handleDeleteRecipe}>
            <Icon
              iconId="delete"
              iconStyles="h-5 w-5 fill-current text-yellow-darkest group-hover:text-white"
            />
          </button>
        </div>
      </div>

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
        {ingredients.map((ingredient, index) => (
          <div key={index} className="flex items-center p-1">
            <Icon
              iconStyles="h-3 w-3 fill-current text-yellow-light"
              iconId="circle"
            />
            <div className="ml-2">{ingredient.ingredient}</div>
          </div>
        ))}
      </div>
      <div>Preparation</div>
      {prepSteps.map((step, index) => (
        <div key={index} className="flex p-1">
          <div className="text-yellow-darkest">{index + 1}.</div>
          <div className="mx-2 text-justify">{step.instruction}</div>
        </div>
      ))}
    </>
  );
};

export default RecipePage;
