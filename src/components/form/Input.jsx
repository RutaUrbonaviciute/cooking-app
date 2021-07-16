import React from 'react';

export const Input = ({ id, value, type, placeholder = null, onChange }) => (
  <input
    className="shadow appearance-none border-yellow-dark rounded w-full py-2 px-3 text-gray-darkest leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-light focus:ring-yellow-light"
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={e => {
      onChange(e, id);
    }}
  />
);
