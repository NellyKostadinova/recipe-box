import React, { useState, useEffect } from 'react';

function EditableField(props) {
  const [internalValue, setInternalValue] = useState(props.value);

  useEffect(() => {
    if (props.saving) {
      props.handleSave(props.id, props.itemKey, internalValue);
    }
  }, [props.saving]);

  function handleChange(value) {
    setInternalValue(value);
  }

  const InputTag = props.inputTag || 'input';

  return (
    <InputTag
      className={props.className}
      onBlur={e => handleChange(e.target.value)}
      defaultValue={internalValue}
    />
  );
}

export default EditableField;
