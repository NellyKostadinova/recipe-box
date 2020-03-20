import React, { useState, useEffect } from 'react';

function EditableList(props) {
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

  const InputTag = props.inputTag || 'input';

  return (
    <>
      {internalItems.map((item, index) => {
        return (
          <li key={index}>
            <InputTag
              index={index}
              onBlur={e => handleChange(index, e.target.value)}
              defaultValue={item}
              className={props.className}
            />
          </li>
        );
      })}
      <button className="add sm" onClick={addListItem}>
        +
      </button>
    </>
  );
}

export default EditableList;
