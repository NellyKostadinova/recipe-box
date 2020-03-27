import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import * as recipeActions from '../actions/recipeActions';
import recipeStore from '../stores/recipeStore';
import useRecipeForm from '../hooks/useRecipeForm';
import RecipeForm from '../components/RecipeForm/RecipeForm';
import FocusRecipe from '../components/FocusRecipe/FocusRecipe';
import Popup from '../components/Popup/Popup';
import DangerButton from '../common/Buttons/DangerButton';
import SecondaryButton from '../common/Buttons/SecondaryButton';

function ViewRecipePage() {
  const { recipe, setRecipe, handlers } = useRecipeForm(handleSave);
  const [initialRecipe, setInitialRecipe] = useState({});
  const [editing, setEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
        <SecondaryButton
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {editing ? 'Cancel' : 'Edit'}
        </SecondaryButton>
        <DangerButton onClick={() => setShowPopup(true)}>Delete</DangerButton>
      </nav>
      {editing ? (
        <RecipeForm {...recipe} {...handlers} />
      ) : (
        <FocusRecipe {...initialRecipe} />
      )}
      {showPopup && (
        <Popup>
          <h1>Delete recipe?</h1>
          <DangerButton onClick={handleDelete}>Delete</DangerButton>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </Popup>
      )}
    </section>
  );
}

export default ViewRecipePage;
