import React from "react";

const NewRecipeForm = ({ newRecipe, hideRecipeForm, onUpdatedForm }) => { 
  return (
<div className='recipe-details'>
      <div className='recipe-form'>
        <h2>New Recipe</h2>
        <button className='cancel-button' onClick={hideRecipeForm}>
            Cancel
        </button>
 
        <form>
          <label>Title</label>
          <input type='text' name='title' value={newRecipe.title} onChange={(e) => onUpdatedForm(e)} required />
 
          <label>Ingredients</label>
          <textarea
            name='ingredients'
            value={newRecipe.ingredients}
            onChange={(e) => onUpdatedForm(e)}
            required
            placeholder='Add ingredients separated by commas - i.e. Flour, sugar, almonds'
          />
 
          <label>Instructions</label>
          <textarea name='instructions' value={newRecipe.instructions} onChange={(e) => onUpdatedForm(e)} required />
 
          <label>Description</label>
          <textarea name='description' value={newRecipe.description} onChange={(e) => onUpdatedForm(e)} required />
          
 
          <label>Image</label>
          <input type='text' name='image_url' value={newRecipe.image_url} onChange={(e) => onUpdatedForm(e)} required />
 
          <label>Servings</label>
          <input type='number' name='servings' value={newRecipe.servings} onChange={(e) => onUpdatedForm(e)} required />
 
          <button type='submit'>Save Recipe</button>
        </form>
      </div>
    </div>
  );
};
 
export default NewRecipeForm;