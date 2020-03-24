import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FocusRecipe from '../components/FocusRecipe';
import { useParams } from 'react-router-dom';
import { cleanRecipe, getRecipe, getLocalStorageRecipes } from '../_helpers';
import RecipeForm from '../components/RecipeForm';

function ViewRecipePage(props) {
  const [recipe, setRecipe] = useState({
    id: null,
    title: '',
    categories: [''],
    imgUrl: '',
    ingredients: [''],
    instructions: [''],
    difficulty: 1
  });
  const [editing, setEditing] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setRecipe(getRecipe(getLocalStorageRecipes(), id));
  }, [id]);

  function handleEdit() {
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setRecipe(cleanRecipe(recipe));
    setEditing(false);
    props.saveRecipe(recipe);
  }

  function handleChange(event) {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  }

  function handleListChange(index, event) {
    let _list = recipe[event.target.name];
    _list[index] = event.target.value;
    setRecipe({ ...recipe, [event.target.name]: _list });
  }

  function handleDifficultyChange(val) {
    setRecipe({ ...recipe, difficulty: val });
  }

  function handleAddItem(event) {
    event.preventDefault();
    let _list = [...recipe[event.target.name], ''];
    setRecipe({ ...recipe, [event.target.name]: _list });
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
        <RecipeForm
          {...recipe}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onListChange={handleListChange}
          onDifficultyChange={handleDifficultyChange}
          onAddItem={handleAddItem}
        />
      ) : (
        <FocusRecipe {...recipe} />
      )}
    </section>
  );
}

export default ViewRecipePage;
