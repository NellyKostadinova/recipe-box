import { useState } from 'react';
import { cleanRecipe } from '../_helpers';

function useRecipeForm(callback) {
  const [recipe, setRecipe] = useState({
    id: null,
    title: '',
    categories: [''],
    imgUrl: '',
    ingredients: [''],
    instructions: [''],
    difficulty: 1
  });

  function onChange(event) {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  }

  function onListChange(index, event) {
    let _list = recipe[event.target.name];
    _list[index] = event.target.value;
    setRecipe({ ...recipe, [event.target.name]: _list });
  }

  function onDifficultyChange(val) {
    setRecipe({ ...recipe, difficulty: val });
  }

  function onAddItem(event) {
    event.preventDefault();
    let _list = [...recipe[event.target.name], ''];
    setRecipe({ ...recipe, [event.target.name]: _list });
  }

  function onSubmit(event) {
    event.preventDefault();
    setRecipe(cleanRecipe(recipe));
    callback();
  }

  return {
    recipe,
    setRecipe,
    handlers: {
      onChange,
      onListChange,
      onDifficultyChange,
      onAddItem,
      onSubmit
    }
  };
}

export default useRecipeForm;
