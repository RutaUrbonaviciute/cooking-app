import React from 'react';
import HomeIcon from './Icons/HomeIcon.jsx';
import PlusIcon from './Icons/PlusIcon.jsx';
import RestaurantIcon from './Icons/RestaurantIcon.jsx';

const NavigationMobile = () => {
  return (
    <div className="bg-yellow-light p-2 mt-4 w-full rounded-lg flex justify-center sticky bottom-4 overflow-hidden">
      <button className="group mx-2 rounded-lg flex justify-center items-center hover:bg-yellow-darkest">
        <div className="px-2 py-1 flex flex-col justify-center items-center text-yellow-darkest group-hover:text-white">
          {/* <HomeIcon color="stroke-current" /> */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current text-yellow-darkest group-hover:text-white" xmlns="http://www.w3.org/2000/svg">
            <g id="home-alt">
              <g id="Icon/home">
                <path id="Path 6" d="M3 22.1818V10.1818L12 2L21 10.1818V22.1818H3Z"  />
              </g>
              <rect id="Rectangle" x="9" y="14" width="6" height="8" rx="1" />
            </g>
          </svg>
          <div className="group-hover:text-white">Home</div>
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
