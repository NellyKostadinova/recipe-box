function ID() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

function getRecipe(recipeArr, id) {
  return recipeArr.filter(recipe => recipe.id === id)[0];
}

function getRecipeIndex(recipeArr, id) {
  return recipeArr.findIndex(recipe => recipe.id === id);
}

function updateRecipeArray(recipeArr, recipe, index) {
  let _recipeArr = [...recipeArr];
  if (index >= 0) {
    _recipeArr[index] = recipe;
  } else {
    //TODO
    //if it's a new recipe
    _recipeArr.push(recipe);
  }

  return _recipeArr;
}

function getLocalStorageRecipes() {
  return JSON.parse(window.localStorage.getItem('rbRecipes'));
}

function setLocalStorageRecipes(recipes) {
  window.localStorage.setItem('rbRecipes', JSON.stringify(recipes));
}

export {
  ID,
  getRecipe,
  getRecipeIndex,
  updateRecipeArray,
  getLocalStorageRecipes,
  setLocalStorageRecipes
};
