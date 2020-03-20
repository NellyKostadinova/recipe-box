import React from 'react';
import EditableList from './EditableList';
import './TagList.scss';

function TagList(props) {
  return (
    <>
      <ul className="tag-list">
        {props.editing || props.saving ? (
          <EditableList
            id={props.id}
            itemsKey="categories"
            items={props.tags}
            saving={props.saving}
            handleSave={props.handleSave}
            className="category-tag"
          />
        ) : (
          props.tags.map((item, index) => {
            return (
              <li className="category-tag" key={index}>
                {item}
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}

export default TagList;
