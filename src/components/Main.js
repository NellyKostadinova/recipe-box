import React, { useState } from 'react';
import FocusRecipe from './FocusRecipe';
import './Main.scss';
import RecipeGrid from './RecipeGrid';

function Main(props) {
  const [focusRecipe, setFocusRecipe] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    title: 'My New Recipe',
    categories: [],
    imgUrl: '',
    ingredients: [],
    instructions: [],
    difficulty: 0
  });

  function openRecipe(recipe) {
    setFocusRecipe(recipe);
  }

  function closeRecipe() {
    setFocusRecipe(null);
  }

  function handleDelete(id) {
    closeRecipe();
    props.deleteRecipe(id);
  }

  return (
    <main className="container">
      {focusRecipe ? (
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
