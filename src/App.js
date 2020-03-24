import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  ID,
  cleanRecipe,
  setLocalStorageRecipes,
  getLocalStorageRecipes
} from './_helpers';
import sampleRecipes from './assets/recipes';
import './App.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import RecipeGrid from './components/RecipeGrid';
import AddRecipePage from './pages/AddRecipePage';
import ViewRecipePage from './pages/ViewRecipePage';

function App() {
  const [localRecipes, setLocalRecipes] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let storedRecipes = getLocalStorageRecipes();

    if (storedRecipes && storedRecipes.length > 0) {
      setLocalRecipes(storedRecipes);
    } else {
      let idfiedRecipes = sampleRecipes.map(recipe => {
        recipe.id = ID();
        return recipe;
      });
      setLocalRecipes(idfiedRecipes);
    }
  }, []);

  useEffect(() => {
    setLocalStorageRecipes(localRecipes);
  }, [localRecipes]);

  function deleteRecipe(id) {
    history.push('/');
    setLocalRecipes(localRecipes.filter(recipe => recipe.id !== id));
  }

  function saveRecipe(recipe) {
    let cleanedRecipe = cleanRecipe(recipe);
    let _recipes;
    if (recipe.id) {
      _recipes = localRecipes.map(localRecipe =>
        localRecipe.id === recipe.id ? cleanedRecipe : localRecipe
      );
    } else {
      cleanedRecipe.id = ID();
      _recipes = [cleanedRecipe, ...localRecipes];
    }
    setLocalRecipes(_recipes);
  }

  return (
    <>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <RecipeGrid recipes={localRecipes} />
          </Route>
          <Route path="/recipe/:id">
            <ViewRecipePage
              saveRecipe={saveRecipe}
              deleteRecipe={deleteRecipe}
            />
          </Route>
          <Route path="/add">
            <AddRecipePage saveRecipe={saveRecipe} />
          </Route>
          <Route path="/shopping-list">
            <h1>Shopping List</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
