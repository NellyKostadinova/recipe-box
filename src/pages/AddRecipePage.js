import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';

function AddRecipePage(props) {
  const [recipe, setRecipe] = useState({
    id: null,
    title: '',
    categories: [''],
    imgUrl: '',
    ingredients: [''],
    instructions: [''],
    difficulty: 1
  });
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    props.saveRecipe(recipe);
    history.push('/');
  }

  function handleChange(event) {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  }

  function handleListChange(index, event) {
    let _list = recipe[event.target.name];
    _list[index] = event.target.value;
    setRecipe({ ...recipe, [event.target.name]: _list });
  }

  function handleAddItem(event) {
    event.preventDefault();
    let _list = recipe[event.target.name];
    _list.push('');
    setRecipe({ ...recipe, [event.target.name]: _list });
  }

  return (
    <RecipeForm
      {...recipe}
      onSubmit={handleSubmit}
      onChange={handleChange}
      onListChange={handleListChange}
      onAddItem={handleAddItem}
    />
  );
}

export default AddRecipePage;
