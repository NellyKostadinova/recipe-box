import React from 'react';
import { useHistory } from 'react-router-dom';
import * as recipeActions from '../actions/recipeActions';
import useRecipeForm from '../hooks/useRecipeForm';
import RecipeForm from '../components/RecipeForm/RecipeForm';

function AddRecipePage() {
  const { recipe, handlers } = useRecipeForm(handleSave);
  const history = useHistory();

  function handleSave() {
    history.push('/');
    recipeActions.saveRecipe(recipe);
  }

  return <RecipeForm {...recipe} {...handlers} />;
}

export default AddRecipePage;
