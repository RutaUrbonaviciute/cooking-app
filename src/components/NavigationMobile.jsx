import React from 'react';
import Icon from './Icons/Icon.jsx';

const NavigationMobile = () => {
  const navigationTabs = [
    {
      id: 1,
      title: 'Home',
      icondId: 'home',
    },
    {
      id: 2,
      title: 'Recipes',
      icondId: 'restaurant',
    },
    {
      id: 3,
      title: 'Add Recipe',
      icondId: 'add',
    },
  ];

  return (
    <div className="bg-yellow-light p-2 mt-4 rounded-lg flex justify-center fixed left-4 right-4 bottom-4 overflow-hidden">
      {navigationTabs.map(tab => (
        <button
          key={tab.id}
          className="group mx-2 flex justify-center items-center rounded-lg hover:bg-yellow-darkest"
        >
          <div className="px-2 py-1 flex flex-col justify-center items-center">
            <Icon
              iconId={tab.icondId}
              iconStyles="h-6 w-6 stroke-current text-yellow-darkest group-hover:text-white"
            />
            <div className="text-yellow-darkest group-hover:text-white">
              {tab.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default NavigationMobile;
