import React, { useState } from 'react';

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
          <li key={item}>
            <input
              index={index}
              onBlur={e => handleChange(index, e.target.value)}
              defaultValue={item}
            />
          </li>
        )
      : _items.push(<li key={item}>{item}</li>);
  });

  return (
    <div className={props.className}>
      <button className="edit" onClick={editing ? handleSave : handleEdit}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <h2>{props.title}</h2>
      {props.ordered ? (
        <ol>
          {_items}
          {editing && <button onClick={addListItem}>+</button>}
        </ol>
      ) : (
        <ul>
          {_items}
          {editing && <button onClick={addListItem}>+</button>}
        </ul>
      )}
    </div>
  );
}

export default RecipeSection;
