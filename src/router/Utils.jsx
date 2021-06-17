import qs from 'querystringify';

export const locationToRoute = ({ location }) => ({
  path: location.pathname,
  hash: location.hash,
  query: qs.parse(location.search),
});
