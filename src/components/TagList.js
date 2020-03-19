import React from 'react';
import './TagList.scss';

function TagList(props) {
  return (
    <div className="tag-list">
      {props.tags.map(tag => {
        return (
          <div className="category-tag" key={tag}>
            {tag}
          </div>
        );
      })}
    </div>
  );
}

export default TagList;
