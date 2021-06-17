import React from 'react';
import icons from '../../../public/images/icons.svg';

const Icon = ({ iconId, iconStyles }) => {
  return (
    <svg
      className={`tw-inline-block tw-fill-current tw-flex-shrink-0 ${iconStyles}`}
    >
      <use href={icons + '#' + iconId} />
    </svg>
  );
};

export default Icon;
