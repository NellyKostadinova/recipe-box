import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import sampleRecipes from './assets/recipes';
import './App.scss';

function App() {
  const [localRecipes, setLocalRecipes] = useState([]);

  function ID() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  }

  useEffect(() => {
    let storedRecipes = JSON.parse(window.localStorage.getItem('rbRecipes'));

    if (storedRecipes.length > 0) {
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
    let updatedRecipe = localRecipes.filter(recipe => recipe.id === id)[0];
    updatedRecipe[itemsKey] = changedItems;
    let index = localRecipes.findIndex(recipe => recipe.id === id);
    let updatedLocalRecipes = [...localRecipes];
    updatedLocalRecipes[index] = updatedRecipe;
    setLocalRecipes(updatedLocalRecipes);
  }

  return (
    <>
      <Header />
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
