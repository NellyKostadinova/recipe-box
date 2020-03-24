import React from 'react';
import './TagList.scss';

function TagList(props) {
  return (
    <ul className="tag-list">
      {props.tags.map((item, index) => {
        return (
          <li className="category-tag" key={index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default TagList;
