import React from 'react';

const AddRecipePage = () => {
  return (
    <div className="bg-yellow-lightest text-gray-darkest box-border p-4 mb-20 md:bg-purple-100 lg:bg-purple-200">
      <h1>Add Recipe</h1>
      <form>
        <label htmlFor="recipe-title">Recipe Title</label>
        <input type="text" name="recipe-title" id="recipe-title" />

        <label htmlFor="preparation-time">Preparation time</label>
        <input type="text" name="preparation-time" id="preparation-time" />

        <label htmlFor="portions">Portions</label>
        <input type="text" name="portions" id="portions" />

        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" name="ingredients" id="ingredients" />

        <label htmlFor="instructions">Instructions</label>
        <input type="text" name="instructions" id="instructions" />
      </form>
    </div>
  );
};

export default AddRecipePage;
