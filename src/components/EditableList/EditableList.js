import React from 'react';

function EditableList(props) {
  const InputTag = props.inputTag || 'input';
  const ListTag = props.ordered ? 'ol' : 'ul';

  return (
    <ListTag className={props.className}>
      {props.items.map((item, index) => {
        return (
          <li key={index}>
            <InputTag
              name={props.name}
              value={item}
              placeholder={props.placeholder}
              onChange={event => {
                props.onChange(index, event);
              }}
              required={index === 0 ? true : false}
              className={props.inputClassName}
            />
          </li>
        );
      })}
      <button className="add sm" name={props.name} onClick={props.onAddItem}>
        +
      </button>
    </ListTag>
  );
}

export default EditableList;
