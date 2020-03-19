import React, { useState } from 'react';

function RecipeImage(props) {
  const [editing, setEditing] = useState(false);
  const [internalUrl, setInternalUrl] = useState(props.imgUrl);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    props.saveRecipe(props.id, 'imgUrl', internalUrl);
  }

  function handleChange(value) {
    setInternalUrl(value);
  }

  return (
    <div className="recipe-image">
      <img src={internalUrl} alt={props.title}></img>
      <button className="edit sm" onClick={editing ? handleSave : handleEdit}>
        {editing ? 'Save' : 'Edit'}
      </button>
      {editing && (
        <input
          onBlur={e => handleChange(e.target.value)}
          defaultValue={internalUrl}
        />
      )}
    </div>
  );
}

export default RecipeImage;
