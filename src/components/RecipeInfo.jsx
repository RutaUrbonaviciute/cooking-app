import React from 'react';
import Icon from './Icons/Icon';

const RecipeInfo = ({ prepTime, peopleNumber }) => {
  return (
    <div className="flex w-full justify-start mt-4">
      <div className="flex justify-between items-center">
        <Icon
          iconId="clock"
          iconStyles="h-3 w-3 fill-current text-yellow-darkest"
        />
        <div className="ml-2 mr-4">{prepTime} min</div>
      </div>
      <div className="flex justify-between items-center">
        <Icon
          iconId="people-icon"
          iconStyles="h-6 w-5 stroke-current text-yellow-darkest"
        />
        <div className="ml-2">{peopleNumber}</div>
      </div>
    </div>
  );
};

export default RecipeInfo;
