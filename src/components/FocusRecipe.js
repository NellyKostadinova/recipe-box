import React, { useState } from 'react';
import RecipeTitle from './RecipeTitle';
import TagList from './TagList';
import DifficultyLevel from './DifficultyLevel';
import RecipeSection from './RecipeSection';
import RecipeImage from './RecipeImage';
import './FocusRecipe.scss';

function FocusRecipe(props) {
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  function handleEdit() {
    setEditing(true);
  }

  function handleSave() {
    setEditing(false);
    setSaving(true);
  }

  function handleSaveFinished(id, itemsKey, internalItems) {
    setSaving(false);
    props.saveRecipe(id, itemsKey, internalItems);
  }

  const editingProps = {
    id: props.id,
    editing: editing,
    saving: saving,
    handleSave: handleSaveFinished
  };

  return (
    <section>
      <button onClick={props.closeRecipe}>{'<- '}Back</button>
      <button
        className={editing ? '' : 'edit'}
        onClick={editing ? handleSave : handleEdit}
      >
        {editing ? 'Save' : 'Edit'}
      </button>
      <button
        className="danger"
        onClick={() => {
          props.deleteRecipe(props.id);
        }}
      >
        Delete
      </button>
      <article className="focus-recipe">
        <div className="recipe-info">
          <RecipeTitle title={props.title} {...editingProps} />
          <TagList tags={props.categories} />
          <DifficultyLevel level={props.difficulty} />
          <RecipeSection
            title="Ingredients:"
            itemsKey="ingredients"
            items={props.ingredients}
            ordered={false}
            className="recipe-ingredients"
            {...editingProps}
          />
          <RecipeSection
            title="Instructions:"
            itemsKey="instructions"
            items={props.instructions}
            ordered={true}
            className="recipe-instructions"
            {...editingProps}
          />
        </div>
        <RecipeImage
          title={props.title}
          imgUrl={props.imgUrl}
          {...editingProps}
        />
      </article>
    </section>
  );
}

export default FocusRecipe;
