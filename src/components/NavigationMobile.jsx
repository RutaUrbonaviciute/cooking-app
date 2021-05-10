import React from 'react';
import Icon from './Icons/Icon';
import { Link } from '../router/Link';

const NavigationMobile = () => {
  const navigationTabs = [
    {
      title: 'Home',
      iconId: 'home',
      path: '/',
    },
    {
      title: 'Recipes',
      iconId: 'restaurant',
      path: '/recipes',
    },
    {
      title: 'Add Recipe',
      iconId: 'add',
      path: '/add',
    },
  ];

  return (
    <div className="bg-yellow-light p-2 mt-4 rounded-lg flex justify-center fixed left-4 right-4 bottom-4 overflow-hidden">
      {navigationTabs.map(tab => (
        <Link key={tab.title} to={tab.path}>
          <div
            key={tab.title}
            className="group mx-2 flex justify-center items-center rounded-lg hover:bg-yellow-darkest"
          >
            <div className="px-2 py-1 flex flex-col justify-center items-center">
              <Icon
                iconId={tab.iconId}
                iconStyles="h-6 w-6 stroke-current text-yellow-darkest group-hover:text-white"
              />
              <div className="text-yellow-darkest group-hover:text-white">
                {tab.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationMobile;
