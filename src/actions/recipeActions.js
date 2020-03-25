import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';
import {
  ID,
  cleanRecipe,
  getLocalStorageRecipes,
  setLocalStorageRecipes
} from '../_helpers';
import sampleRecipes from '../assets/recipes.json';

export function saveRecipe(recipe) {
  let cleanedRecipe = cleanRecipe(recipe);
  let storedRecipes = getLocalStorageRecipes();
  let payloadRecipes;
  if (recipe.id) {
    payloadRecipes = storedRecipes.map(localRecipe =>
      localRecipe.id === recipe.id ? cleanedRecipe : localRecipe
    );
  } else {
    cleanedRecipe.id = ID();
    payloadRecipes = [cleanedRecipe, ...storedRecipes];
  }

  setLocalStorageRecipes(payloadRecipes);
  dispatcher.dispatch({
    actionType: actionTypes.saveRecipe,
    recipes: payloadRecipes
  });
}

export function deleteRecipe(recipe) {
  let payloadRecipes = getLocalStorageRecipes().filter(
    _recipe => _recipe.id !== recipe.id
  );

  setLocalStorageRecipes(payloadRecipes);
  dispatcher.dispatch({
    actionType: actionTypes.deleteRecipe,
    recipes: payloadRecipes
  });
}

export function loadRecipes() {
  let storedRecipes = getLocalStorageRecipes();
  let payloadRecipes;

  if (storedRecipes && storedRecipes.length > 0) {
    payloadRecipes = storedRecipes;
  } else {
    payloadRecipes = sampleRecipes.map(recipe => {
      recipe.id = ID();
      return recipe;
    });
    setLocalStorageRecipes(payloadRecipes);
  }

  dispatcher.dispatch({
    actionType: actionTypes.loadRecipes,
    recipes: payloadRecipes
  });
}
