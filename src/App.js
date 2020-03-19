import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import Main from './components/Main';
import Footer from './components/Footer';
import { ID, getRecipe, getRecipeIndex, updateRecipeArray } from './_helpers';
import sampleRecipes from './assets/recipes';
import './App.scss';

function App() {
  const [localRecipes, setLocalRecipes] = useState([]);
  const [addingRecipe, setAddingRecipe] = useState(false);

  useEffect(() => {
    let storedRecipes = JSON.parse(window.localStorage.getItem('rbRecipes'));

    if (storedRecipes) {
      setLocalRecipes(storedRecipes);
    } else {
      let idfiedRecipes = [];
      sampleRecipes.map(recipe => {
        recipe.id = ID();
        idfiedRecipes.push(recipe);
      });
      setLocalRecipes(idfiedRecipes);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('rbRecipes', JSON.stringify(localRecipes));
  }, [localRecipes]);

  function deleteRecipe(id) {
    setLocalRecipes(localRecipes.filter(recipe => recipe.id !== id));
  }

  function saveRecipe(id, itemsKey, changedItems) {
    let updatedRecipe = getRecipe(localRecipes, id);
    updatedRecipe[itemsKey] = changedItems;
    let index = getRecipeIndex(localRecipes, id);
    setLocalRecipes(updateRecipeArray(localRecipes, updatedRecipe, index));
  }

  function showRecipeForm() {
    setAddingRecipe(true);
  }

  return (
    <>
      <Header showRecipeForm={showRecipeForm} />
      <Main
        recipes={localRecipes}
        deleteRecipe={deleteRecipe}
        saveRecipe={saveRecipe}
      />
      <Footer />
    </>
  );
}

export default App;
