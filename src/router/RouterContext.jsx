import React, { useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { locationToRoute } from './Utils';
import { NotFound } from '../404';

//store the location in URLs
const history = createBrowserHistory();

//to pass our values down
export const RouterContext = React.createContext({
  route: locationToRoute(history),
});

const RouterProvider = ({ routeList, children }) => {
  const [routes] = useState(
    Object.keys(routeList).map(key => routeList[key].path)
  );
  const [route, setRoute] = useState(locationToRoute(history));

  //function which is very crucial to set which route to navigate.
  const handleRouteChange = location => {
    const route = locationToRoute(location);
    setRoute(route);
  };

  //check which routes are proper or not, and if they are not
  const is404 = routes.indexOf(route.path) === -1;

  // to be able to listen changes in the route we use useLayoutEffect() it also
  //fires synchronously right after all DOM manipulations end. In it's the cleanup function we just call unlisten(). And, finally, we return our
  useLayoutEffect(() => {
    let unlisten = history.listen(handleRouteChange);

    return () => {
      unlisten();
    };
  }, []);

  return (
    <RouterContext.Provider value={{ route }}>
      {is404 ? <NotFound /> : children}
    </RouterContext.Provider>
  );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };
