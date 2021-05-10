import React from 'react';
import { Link } from './router/Link';
import { routes } from './routes';

export function NotFound() {
  return (
    <div>
      <p>ooopsyyyy </p>
      <Link to={routes.home.path}>Back to home</Link>
    </div>
  );
}
