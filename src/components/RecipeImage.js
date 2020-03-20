import React from 'react';
import EditableField from './EditableField';

function RecipeImage(props) {
  return (
    <div className="recipe-image">
      <img src={props.imgUrl} alt={props.title}></img>
      {(props.editing || props.saving) && (
        <EditableField
          id={props.id}
          itemKey="imgUrl"
          value={props.imgUrl}
          saving={props.saving}
          handleSave={props.handleSave}
        />
      )}
    </div>
  );
}

export default RecipeImage;
