import React from 'react';
import { useRouter, history } from './RouterContext';

export function Link({ to, children, onClick, id, ...props }) {
  const { route } = useRouter();

  const handleClick = e => {
    e.preventDefault();

    if (route.path === to) {
      // If it's not a valid path function will not trigger.
      return;
    }
    if (onClick) {
      onClick(e);
    }
    history.push(to);
  };

  return (
    <>
      <a {...props} onClick={handleClick}>
        {children}
      </a>
    </>
  );
}
