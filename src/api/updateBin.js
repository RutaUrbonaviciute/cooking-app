import { binId, root, xMasterKey } from './constants';

const updateBin = async data => {
  const response = await fetch(`${root}/b/${binId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-master-key': xMasterKey,
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to update a room');
  }

  return response.json();
};

export default updateBin;
