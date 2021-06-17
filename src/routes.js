export const routes = {
  home: {
    path: '/',
    getProps: path => ({}),
    match: path => path === '/',
  },
  recipe: {
    buildPath: id => `/recipe/${id}`,
    path: '/recipe/${id}',
    getProps: path => {
      // name groups
      // get id from the path
      return { id: path.split('/').pop().trim() };
    },
    match: path => {
      const regex = new RegExp(/^\/recipe\/(\d)+$/);
      return regex.test(path);
    },
  },
  recipes: {
    path: '/recipes',
    getProps: path => ({}),
    match: path => path === '/recipes',
  },
  addRecipe: {
    path: '/add',
    getProps: path => ({}),
    match: path => path === '/add',
  },
};
