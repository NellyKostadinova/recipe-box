import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const changeEvent = 'change';
let _recipes = [];
class RecipeStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(changeEvent, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(changeEvent, callback);
  }

  emitChange() {
    this.emit(changeEvent);
  }

  getRecipes() {
    return _recipes;
  }

  getRecipeById(id) {
    return _recipes.find(recipe => recipe.id === id);
  }
}

const recipeStore = new RecipeStore();

dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.saveRecipe:
      _recipes = action.recipes;
      recipeStore.emitChange();
      break;
    case actionTypes.deleteRecipe:
      _recipes = action.recipes;
      recipeStore.emitChange();
      break;
    case actionTypes.loadRecipes:
      _recipes = action.recipes;
      recipeStore.emitChange();
      break;
    default:
  }
});

export default recipeStore;
