import React, { useState, useEffect } from 'react';

function RecipeTitle(props) {
  const [internalTitle, setInternalTitle] = useState(props.title);

  useEffect(() => {
    if (props.saving) {
      props.handleSave(props.id, 'title', internalTitle);
    }
  }, [props.saving]);

  function handleChange(value) {
    setInternalTitle(value);
  }

  return (
    <>
      {props.editing ? (
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
