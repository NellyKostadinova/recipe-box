import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useRecipeForm from '../hooks/useRecipeForm';
import { getRecipe, getLocalStorageRecipes } from '../_helpers';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import FocusRecipe from '../components/FocusRecipe/FocusRecipe';

function ViewRecipePage(props) {
  const { recipe, setRecipe, handlers } = useRecipeForm(handleSave);
  const [editing, setEditing] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setRecipe(getRecipe(getLocalStorageRecipes(), id));
  }, [id, setRecipe]);

  function handleEdit() {
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
  }

  function handleSave() {
    props.saveRecipe(recipe);
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
            props.deleteRecipe(recipe.id);
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
