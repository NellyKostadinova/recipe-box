const mockImage =
  'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';

function ID() {
  return (
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
}

function cleanList(list) {
  return list.filter(item => item !== '');
}

function cleanRecipe(recipe) {
  let _categories = cleanList(recipe.categories);
  let _ingredients = cleanList(recipe.ingredients);
  let _instructions = cleanList(recipe.instructions);
  return {
    ...recipe,
    categories: _categories,
    ingredients: _ingredients,
    instructions: _instructions
  };
}

function getRecipe(recipeArr, id) {
  return recipeArr.filter(recipe => recipe.id === id)[0];
}

// function getRecipeIndex(recipeArr, id) {
//   return recipeArr.findIndex(recipe => recipe.id === id);
// }

// function updateRecipeArray(recipeArr, recipe, index) {
//   let _recipeArr = [...recipeArr];
//   if (index >= 0) {
//     _recipeArr[index] = recipe;
//   } else {
//     //TODO
//     //if it's a new recipe
//     _recipeArr.push(recipe);
//   }

//   return _recipeArr;
// }

function getLocalStorageRecipes() {
  return JSON.parse(window.localStorage.getItem('rbRecipes'));
}

function setLocalStorageRecipes(recipes) {
  window.localStorage.setItem('rbRecipes', JSON.stringify(recipes));
}

export {
  mockImage,
  ID,
  cleanList,
  cleanRecipe,
  getRecipe,
  //getRecipeIndex,
  //updateRecipeArray,
  getLocalStorageRecipes,
  setLocalStorageRecipes
};
