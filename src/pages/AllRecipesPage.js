import React, { useEffect, useState } from 'react';
import * as recipeActions from '../actions/recipeActions';
import recipeStore from '../stores/recipeStore';
import RecipeGrid from '../components/RecipeGrid/RecipeGrid';

function AllRecipesPage() {
  const [localRecipes, setLocalRecipes] = useState(recipeStore.getRecipes());

  useEffect(() => {
    recipeStore.addChangeListener(onChange);
    let storeRecipes = recipeStore.getRecipes();
    if (storeRecipes.length <= 0) {
      recipeActions.loadRecipes();
    }
    return () => {
      recipeStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setLocalRecipes(recipeStore.getRecipes());
  }

  return <RecipeGrid recipes={localRecipes} />;
}

export default AllRecipesPage;
