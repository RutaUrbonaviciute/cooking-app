import React from 'react';

export const LabelInput = ({
  label,
  id,
  type,
  value,
  placeholder = null,
  onChange,
}) => {
  return (
    <div className="mb-6">
      <label
        className="block text-yellow-darkest font-semibold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border-yellow-dark rounded w-full py-2 px-3 text-gray-darkest leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-light focus:ring-yellow-light"
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
