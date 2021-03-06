const mockImage =
  'https://images.unsplash.com/photo-1517856497829-3047e3fffae1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';

const recipeTemplate = {
  id: null,
  title: '',
  categories: [''],
  imgUrl: mockImage,
  ingredients: [''],
  instructions: [''],
  difficulty: 1
};

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

function getLocalStorageRecipes() {
  return JSON.parse(window.localStorage.getItem('rbRecipes'));
}

function setLocalStorageRecipes(recipes) {
  window.localStorage.setItem('rbRecipes', JSON.stringify(recipes));
}

export {
  mockImage,
  recipeTemplate,
  ID,
  cleanRecipe,
  getLocalStorageRecipes,
  setLocalStorageRecipes
};
