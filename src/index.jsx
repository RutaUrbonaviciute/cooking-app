import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { RouterProvider } from './router/RouterContext';
import PublicRoutes from './router/PublicRoutes';
import { routes } from './routes';
import NavigationMobile from './components/NavigationMobile';

export const RecipeContext = createContext(null);

const App = () => {
  const [value, setValue] = useState(null);

  return (
    <RecipeContext.Provider value={{ value, setValue }}>
      <RouterProvider routeList={routes}>
        <div className="bg-yellow-lightest text-gray-darkest box-border p-4 mb-20 md:bg-purple-100 lg:bg-purple-200">
          <h1 className="text-xl font-semibold pb-4"> Kas pietums</h1>
          <PublicRoutes />
          <NavigationMobile />
        </div>
      </RouterProvider>
    </RecipeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
