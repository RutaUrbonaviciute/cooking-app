import React from 'react';
import { Input } from '../../components/form/Input';
import Label from './Label';

const PreparationTime = ({ handlePrepTime }) => (
  <div className="mb-6">
    <Label text="Preparation Time" />

    <div className="mt-2 flex justify-start items-center">
      <div className="w-20 mr-2">
        <Input
          id="preparationTime"
          type="number"
          placeholder="min"
          onChange={handlePrepTime}
        />
      </div>
      <label htmlFor="preparationTime">min</label>
    </div>
  </div>
);

export default PreparationTime;
