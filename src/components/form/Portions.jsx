import React from 'react';
import Icon from '../Icons/Icon';
import Label from './Label';

const Portions = ({ portionsCount, handleIncrement, handleDecrement }) => (
  <div className="mb-6">
    <Label text="Portions" />
    <div className="mt-2 flex justify-start items-center">
      <button className="group mr-2 rounded-l" onClick={handleDecrement}>
        <Icon
          iconId="decrease"
          iconStyles="h-7 w-7 fill-current text-yellow-darkest"
        />
      </button>
      <div>{portionsCount}</div>
      <button className="group mx-2 rounded-l" onClick={handleIncrement}>
        <Icon
          iconId="increase"
          iconStyles="h-7 w-7 fill-current text-yellow-darkest"
        />
      </button>
    </div>
  </div>
);

export default Portions;
