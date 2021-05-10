import React from 'react';
import { RouterContext } from './RouterContext';

export function Route({ path, children }) {
  // Extract route from RouterContext
  const { route } = React.useContext(RouterContext);

  // Return null if the supplied path doesn't match the current route path
  if (route.path !== path) {
    return null;
  }

  return <>{children}</>;
}
