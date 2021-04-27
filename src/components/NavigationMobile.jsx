import React from 'react';
import HomeIcon from './HomeIcon.jsx';
import PlusIcon from './PlusIcon.jsx';
import RestaurantIcon from './RestaurantIcon.jsx';

const NavigationMobile = () => {
  return (
    <div className="bg-yellow-light p-2 mt-4 w-full rounded-lg flex justify-center fixed bottom-4 overflow-hidden">
      <button className="mx-2 rounded-lg flex justify-center items-center hover:bg-yellow-darkest">
        <div className="px-2 py-1 flex flex-col justify-center items-center hover:text-white">
          <HomeIcon color="#7F5539" />
          Home
      </div>
      </button>
      <button className="mx-2 flex justify-center items-center rounded-lg hover:bg-yellow-darkest">
        <div className="px-2 py-1 flex flex-col justify-center items-center hover:text-white">
        <RestaurantIcon color="#7F5539" />
        Recipes
      </div>
      </button>
      <button className="mx-2 flex justify-center items-center rounded-lg hover:bg-yellow-darkest">
        <div className="px-2 py-1 flex flex-col justify-center items-center hover:text-white">
        <PlusIcon color="#7F5539" />
        Add Recipe
      </div>
      </button>
    </div>
  );
};

export default NavigationMobile;
