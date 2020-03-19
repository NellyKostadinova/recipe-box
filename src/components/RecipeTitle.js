import React, { useState } from 'react';

function RecipeTitle(props) {
  const [editing, setEditing] = useState(false);
  const [internalTitle, setInternalTitle] = useState(props.title);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    props.saveRecipe(props.id, 'title', internalTitle);
  }

  function handleChange(value) {
    setInternalTitle(value);
  }

  return (
    <>
      <button className="edit sm" onClick={editing ? handleSave : handleEdit}>
        {editing ? 'Save' : 'Edit'}
      </button>
      {editing ? (
        <input
          className="recipe-title"
          onBlur={e => handleChange(e.target.value)}
          defaultValue={internalTitle}
        />
      ) : (
        <h1>{internalTitle}</h1>
      )}
    </>
  );
}

export default RecipeTitle;
