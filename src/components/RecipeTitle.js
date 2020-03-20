import React from 'react';
import EditableField from './EditableField';

function RecipeTitle(props) {
  return (
    <>
      {props.editing || props.saving ? (
        <EditableField
          id={props.id}
          itemKey="title"
          value={props.title}
          saving={props.saving}
          handleSave={props.handleSave}
          className="recipe-title"
        />
      ) : (
        <h1>{props.title}</h1>
      )}
    </>
  );
}

export default RecipeTitle;
