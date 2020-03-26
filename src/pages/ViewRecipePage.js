import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import * as recipeActions from '../actions/recipeActions';
import recipeStore from '../stores/recipeStore';
import useRecipeForm from '../hooks/useRecipeForm';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import FocusRecipe from '../components/FocusRecipe/FocusRecipe';

function ViewRecipePage() {
  const { recipe, setRecipe, handlers } = useRecipeForm(handleSave);
  const [initialRecipe, setInitialRecipe] = useState({});
  const [editing, setEditing] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  const onChange = useCallback(() => {
    setInitialRecipe(recipeStore.getRecipeById(id));
  }, [id]);

  useEffect(() => {
    recipeStore.addChangeListener(onChange);
    let storeRecipes = recipeStore.getRecipes();
    if (storeRecipes.length <= 0) {
      recipeActions.loadRecipes();
    } else {
      setInitialRecipe(recipeStore.getRecipeById(id));
    }
    return () => {
      recipeStore.removeChangeListener(onChange);
    };
  }, [id, onChange]);

  useEffect(() => {
    setRecipe(initialRecipe);
  }, [initialRecipe, setRecipe, editing]);

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

  function handleDelete() {
    history.push('/');
    recipeActions.deleteRecipe(recipe);
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
        <button className="danger" onClick={handleDelete}>
          Delete
        </button>
      </nav>
      {editing ? (
        <RecipeForm {...recipe} {...handlers} />
      ) : (
        <FocusRecipe {...initialRecipe} />
      )}
    </section>
  );
}

export default ViewRecipePage;
