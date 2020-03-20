import React, { useState } from 'react';
import { getRecipe } from '../_helpers';
import FocusRecipe from './FocusRecipe';
import RecipeGrid from './RecipeGrid';
import './Main.scss';

function Main(props) {
  const [focusID, setFocusID] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    title: 'My New Recipe',
    categories: [],
    imgUrl: '',
    ingredients: [],
    instructions: [],
    difficulty: 0
  });

  function openRecipe(id) {
    setFocusID(id);
  }

  function closeRecipe() {
    setFocusID(null);
  }

  function handleDelete(id) {
    closeRecipe();
    props.deleteRecipe(id);
  }

  let focusRecipe = {};
  if (focusID) {
    focusRecipe = getRecipe(props.recipes, focusID);
  }

  return (
    <main className="container">
      {focusID ? (
        <FocusRecipe
          {...focusRecipe}
          closeRecipe={closeRecipe}
          saveRecipe={props.saveRecipe}
          deleteRecipe={handleDelete}
        />
      ) : (
        <RecipeGrid recipes={props.recipes} openRecipe={openRecipe} />
      )}
    </main>
  );
}

export default Main;
