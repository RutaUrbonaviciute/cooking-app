import React, { useState, useContext } from 'react';
import { LabelInput } from '../components/form/LabelInput';
import Portions from '../components/form/Portions';
import PreparationTime from '../components/form/PreparationTime';
import FormList from '../components/FormList';
import AddButton from '../components/AddButton.jsx';
import updateBin from '../api/updateBin';
import { RecipeContext } from '..';
import { history } from '../router/RouterContext';

const CreateRecipePage = () => {
  const { value, setValue } = useContext(RecipeContext);

  const [recipeTitle, setRecipeTitle] = useState('');
  const [prepTime, setPrepTime] = useState();
  const [portionsCount, setPortionsCount] = useState(1);
  const [ingredientList, setIngredientList] = useState([]);
  const [instructionList, setInstructionList] = useState([]);

  const randomId = Date.now();

  const handleRecipeTitle = e => {
    e.preventDefault();
    setRecipeTitle(e.target.value.trim());
  };

  const handlePrepTime = e => {
    e.preventDefault();
    setPrepTime(e.target.value);
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    setIngredientList([
      ...ingredientList,
      { id: `ingr-${randomId}`, ingredient: '' },
    ]);
  };

  const handleAddInstruction = e => {
    e.preventDefault();
    setInstructionList([
      ...instructionList,
      { id: `instr-${randomId}`, instruction: '' },
    ]);
  };

  // Create handleIncrement event handler
  const handleIncrement = e => {
    e.preventDefault();
    setPortionsCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = e => {
    e.preventDefault();
    if (portionsCount > 0) {
      setPortionsCount(prevCount => prevCount - 1);
    }
  };

  const handleRemoveIngredient = (e, item) => {
    e.preventDefault();
    setIngredientList(
      ingredientList.filter(listItem => listItem.id !== item.id)
    );
  };

  const handleRemoveInstruction = (e, item) => {
    e.preventDefault();
    setInstructionList(
      instructionList.filter(listItem => listItem.id !== item.id)
    );
  };

  const handleIngredientChange = (e, id) => {
    const index = ingredientList.findIndex(item => item.id === id);

    ingredientList[index] = {
      id,
      ingredient: e.target.value.trim(),
    };

    setIngredientList([...ingredientList]);
  };

  /**
   * galima prilinkinti kita funkcija ar beleka
   * {@link handleAddInstruction}
   */
  const handleInstructionChange = (e, id) => {
    const index = instructionList.findIndex(item => item.id === id);

    instructionList[index] = {
      id,
      instruction: e.target.value.trim(),
    };

    setInstructionList([...instructionList]);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const ingredients = ingredientList.filter(
      ingredient => ingredient.ingredient
    );

    const prepSteps = instructionList.filter(
      instruction => instruction.instruction
    );

    updateBin([
      ...value,
      {
        id: randomId,
        name: recipeTitle,
        prepTime: prepTime,
        peopleNumber: portionsCount,
        imgLink: 'https://source.unsplash.com/user/phototastyfood',
        ingredients,
        prepSteps,
      },
    ])
      .then(res => {
        setValue(res.record);
        history.push('/recipes');
      })
      .catch(err => {
        // to imporove toast notification could be implemented
        // eslint-disable-next-line no-console
        console.error(err);
      });
  };

  return (
    <div className="bg-yellow-lightest text-gray-darkest box-border p-4 mb-20 md:bg-purple-100 lg:bg-purple-200">
      <form className="w-full mb-4" onSubmit={handleSubmit}>
        <LabelInput
          label="Recipe Title"
          id="recipe-title"
          placeholder="title"
          onChange={handleRecipeTitle}
        />

        <div>
          <FormList
            listItems={ingredientList}
            listTitle="Ingredients"
            placeholderName="Ingredient"
            onClick={handleRemoveIngredient}
            onChange={handleIngredientChange}
          />
          <AddButton onClick={handleAddIngredient} />
        </div>
        <div>
          <FormList
            listItems={instructionList}
            listTitle="Instructions"
            placeholderName="Instruction"
            onClick={handleRemoveInstruction}
            onChange={handleInstructionChange}
          />
          <AddButton onClick={handleAddInstruction} />
        </div>

        <Portions
          portionsCount={portionsCount}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />

        <PreparationTime handlePrepTime={handlePrepTime} />

        <div className="mt-6 flex justify-center items-center">
          <button type="submit" className="bg-purple-300 p-2 rounded-md">
            Add recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipePage;
