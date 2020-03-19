import React, { useState } from 'react';
import './RecipeSection.scss';

function RecipeSection(props) {
  const [editing, setEditing] = useState(false);
  const [internalItems, setInternalItems] = useState(props.items);

  function addListItem() {
    setInternalItems([...internalItems, '']);
  }

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    props.saveRecipe(props.id, props.itemsKey, internalItems);
  }

  function handleChange(index, value) {
    let updatedItems = [...internalItems];
    updatedItems[index] = value;
    setInternalItems(updatedItems);
  }

  const _items = [];
  internalItems.map((item, index) => {
    editing
      ? _items.push(
          <li key={index}>
            <input
              index={index}
              onBlur={e => handleChange(index, e.target.value)}
              defaultValue={item}
            />
          </li>
        )
      : _items.push(<li key={index}>{item}</li>);
  });

  return (
    <div className={props.className + ' recipe-section'}>
      <button className="edit sm" onClick={editing ? handleSave : handleEdit}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <h2>{props.title}</h2>
      {props.ordered ? (
        <ol>
          {_items}
          {editing && (
            <button className="add sm" onClick={addListItem}>
              +
            </button>
          )}
        </ol>
      ) : (
        <ul>
          {_items}
          {editing && (
            <button className="add sm" onClick={addListItem}>
              +
            </button>
          )}
        </ul>
      )}
    </div>
  );
}

export default RecipeSection;
