import React from 'react';
import { Input } from './form/Input';
import Icon from '../components/Icons/Icon.jsx';

const FormList = ({
  listItems,
  listTitle,
  onClick,
  onChange,
  placeholderName,
}) => {
  return (
    <>
      <div className="block text-yellow-darkest font-semibold mb-2">
        {listTitle}
      </div>

      {listItems.map((item, index) => (
        <div className="mb-2 flex justify-center items-center" key={item.id}>
          <Input
            id={`ingredient-${item.id}`}
            type="text"
            placeholder={`${placeholderName} ${index + 1}`}
            onChange={e => {
              onChange(e, item.id);
            }}
          />
          <button
            className="group ml-2 flex justify-center items-center rounded-lg hover:bg-yellow-darkest"
            onClick={e => {
              onClick(e, item);
            }}
          >
            <div className="px-2 py-2 flex flex-col justify-center items-center">
              <Icon
                iconId="delete"
                iconStyles="h-5 w-5 fill-current text-yellow-darkest group-hover:text-white"
              />
            </div>
          </button>
        </div>
      ))}
    </>
  );
};

export default FormList;
