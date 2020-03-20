import React, { useState, useEffect } from 'react';

function RecipeImage(props) {
  const [internalUrl, setInternalUrl] = useState(props.imgUrl);

  useEffect(() => {
    if (props.saving) {
      props.handleSave(props.id, 'imgUrl', internalUrl);
    }
  }, [props.saving]);

  function handleChange(value) {
    setInternalUrl(value);
  }

  return (
    <div className="recipe-image">
      <img src={internalUrl} alt={props.title}></img>
      {props.editing && (
        <input
          onBlur={e => handleChange(e.target.value)}
          defaultValue={internalUrl}
        />
      )}
    </div>
  );
}

export default RecipeImage;
