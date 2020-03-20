import React from 'react';
import EditableList from './EditableList';
import './RecipeSection.scss';

function RecipeSection(props) {
  const ListTag = props.ordered ? 'ol' : 'ul';

  return (
    <div className={props.className + ' recipe-section'}>
      <h2>{props.title}</h2>
      <ListTag>
        {props.editing || props.saving ? (
          <EditableList
            id={props.id}
            itemsKey={props.itemsKey}
            items={props.items}
            saving={props.saving}
            handleSave={props.handleSave}
            inputTag={props.inputTag}
          />
        ) : (
          props.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })
        )}
      </ListTag>
    </div>
  );
}

export default RecipeSection;
