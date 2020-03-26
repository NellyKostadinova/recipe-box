import React, { useEffect, useState } from 'react';
import * as recipeActions from '../actions/recipeActions';
import recipeStore from '../stores/recipeStore';
import RecipeGrid from '../components/RecipeGrid/RecipeGrid';
import RecipeList from '../components/RecipeList/RecipeList';
import GridButton from '../common/Buttons/GridButton';
import ListButton from '../common/Buttons/ListButton';

function AllRecipesPage() {
  const [localRecipes, setLocalRecipes] = useState(recipeStore.getRecipes());
  const [isGrid, setIsGrid] = useState(true);

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

  return (
    <>
      <nav className="view-nav">
        <GridButton onClick={() => setIsGrid(true)} />
        <ListButton onClick={() => setIsGrid(false)} />
      </nav>
      {isGrid ? (
        <RecipeGrid recipes={localRecipes} />
      ) : (
        <RecipeList recipes={localRecipes} />
      )}
    </>
  );
}

export default AllRecipesPage;
