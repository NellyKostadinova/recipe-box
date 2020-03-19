import React, { useState } from 'react';
import FocusRecipe from './FocusRecipe';

function RecipeForm(props) {
  const [newRecipe, setNewRecipe] = useState({
    title: 'My New Recipe',
    categories: [],
    imgUrl: '',
    ingredients: [],
    instructions: [],
    difficulty: 0
  });

  return (
    <main className="container">
      <FocusRecipe {...newRecipe} />
    </main>
  );
}

export default RecipeForm;
