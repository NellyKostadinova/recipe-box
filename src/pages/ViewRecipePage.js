import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import * as recipeActions from '../actions/recipeActions';
import recipeStore from '../stores/recipeStores';
import useRecipeForm from '../hooks/useRecipeForm';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import FocusRecipe from '../components/FocusRecipe/FocusRecipe';

function ViewRecipePage() {
  const { recipe, setRecipe, handlers } = useRecipeForm(handleSave);
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    recipeStore.addChangeListener(onChange);
    let storeRecipes = recipeStore.getRecipes();
    if (storeRecipes.length <= 0) {
      recipeActions.loadRecipes();
    } else {
      setRecipe(recipeStore.getRecipeById(id));
    }
    return () => {
      recipeStore.removeChangeListener(onChange);
    };
  }, []);

  function onChange() {
    setRecipe(recipeStore.getRecipeById(id));
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
  }

  function handleSave() {
    recipeActions.saveRecipe(recipe);
    setEditing(false);
  }

  return (
    <section>
      <nav className="recipe-nav">
        <Link to="/" className="button icon-button back">
          Back
        </Link>
        <button className="edit" onClick={editing ? handleCancel : handleEdit}>
          {editing ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="danger"
          onClick={() => {
            history.push('/');
            recipeActions.deleteRecipe(recipe);
          }}
        >
          Delete
        </button>
      </nav>
      {editing ? (
        <RecipeForm {...recipe} {...handlers} />
      ) : (
        <FocusRecipe {...recipe} />
      )}
    </section>
  );
}

export default ViewRecipePage;
