import { binId, root, xMasterKey } from './constants';

const getAllRecipes = async () => {
  const response = await fetch(`${root}/b/${binId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-master-key': xMasterKey,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to get all data');
  }

  return response.json();
};

export default getAllRecipes;
