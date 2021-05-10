import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import HomePage from './pages/HomePage';
import { RouterProvider } from './router/RouterContext';
import RecipePage from './pages/RecipePage';
import RecipesPage from './pages/RecipesPage';
import AddRecipePage from './pages/AddRecipePage';
import { Route } from './router/Route';
import { routes } from './routes';
import { recipes } from './recipesText';
import NavigationMobile from './components/NavigationMobile';

const App = () => {
  return (
    <RouterProvider routeList={routes}>
      <div className="bg-yellow-lightest text-gray-darkest box-border p-4 mb-20 md:bg-purple-100 lg:bg-purple-200">
        <h1 className="text-xl font-semibold pb-4"> Kas pietums</h1>

        <Route path={routes.home.path}>
          <HomePage />
        </Route>

        <Route path={routes.recipes.path}>
          <RecipesPage />
        </Route>

        <Route path={routes.addRecipe.path}>
          <AddRecipePage />
        </Route>

        <Route path={routes.recipe.path}>
          <RecipePage recipe={recipes[0]} />
        </Route>

        <NavigationMobile />
      </div>
    </RouterProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
