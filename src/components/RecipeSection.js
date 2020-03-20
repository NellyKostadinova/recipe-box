import React, { useState, useEffect } from 'react';
import './RecipeSection.scss';

function RecipeSection(props) {
  const [internalItems, setInternalItems] = useState(props.items);

  useEffect(() => {
    if (props.saving) {
      props.handleSave(props.id, props.itemsKey, internalItems);
    }
  }, [props.saving]);

  function handleChange(index, value) {
    let updatedItems = [...internalItems];
    updatedItems[index] = value;
    setInternalItems(updatedItems);
  }

  function addListItem() {
    setInternalItems([...internalItems, '']);
  }

  const _items = [];
  internalItems.map((item, index) => {
    props.editing
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
      <h2>{props.title}</h2>
      {props.ordered ? (
        <ol>
          {_items}
          {props.editing && (
            <button className="add sm" onClick={addListItem}>
              +
            </button>
          )}
        </ol>
      ) : (
        <ul>
          {_items}
          {props.editing && (
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
