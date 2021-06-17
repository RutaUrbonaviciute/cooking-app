import React from 'react';
import Icon from '../components/Icons/Icon.jsx';

const AddButton = ({ onClick }) => {
  return (
    <button
      className="group mt-4 mb-6 flex justify-center items-center rounded w-full bg-yellow-darkest hover:bg-yellow-darkest"
      onClick={onClick}
    >
      <div className="px-2 py-1 flex flex-col justify-center items-center">
        <Icon
          iconId={'add'}
          iconStyles="h-7 w-7 stroke-current text-white group-hover:text-white"
        />
      </div>
    </button>
  );
};

export default AddButton;
