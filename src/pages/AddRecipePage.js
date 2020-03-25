import React from 'react';
import { useHistory } from 'react-router-dom';
import useRecipeForm from '../hooks/useRecipeForm';
import RecipeForm from '../components/RecipeForm/RecipeForm';

function AddRecipePage(props) {
  const { recipe, handlers } = useRecipeForm(handleSave);
  const history = useHistory();

  function handleSave() {
    props.saveRecipe(recipe);
    history.push('/');
  }

  return <RecipeForm {...recipe} {...handlers} />;
}

export default AddRecipePage;
