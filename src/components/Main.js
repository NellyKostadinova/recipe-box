import React, { useState } from 'react';
import FocusRecipe from './FocusRecipe';
import './Main.scss';
import RecipeGrid from './RecipeGrid';

function Main(props) {
  const [focusRecipe, setFocusRecipe] = useState(null);
  const [editing, setEditing] = useState(false);

  function openRecipe(recipe) {
    setFocusRecipe(recipe);
  }

  function closeRecipe() {
    setEditing(false);
    setFocusRecipe(null);
  }

  function deleteRecipe(id) {
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
          deleteRecipe={deleteRecipe}
        />
      ) : (
        <RecipeGrid recipes={props.recipes} openRecipe={openRecipe} />
      )}
    </main>
  );
}

export default Main;
