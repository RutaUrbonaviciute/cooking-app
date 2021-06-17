import { recipesCollectionId, root, xMasterKey } from './constants';

const createRecipe = async recipeData => {
  const response = await fetch(`${root}/b`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-master-key': xMasterKey,
      'X-Collection-Id': recipesCollectionId,
      'X-Bin-Name': `recipe_${recipeData.id}`,
    },
    body: JSON.stringify(recipeData),
  });
  if (!response.ok) {
    throw new Error('Failed to create a room');
  }
  return response.json();
};

export default createRecipe;
