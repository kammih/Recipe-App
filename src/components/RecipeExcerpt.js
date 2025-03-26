import React from 'react'

const RecipeExcerpt = ({recipes}) => {
    return (
        <article className="recipe-card">
            <figure>
               <img src={recipes.image_url} alt={recipes.title} />
            </figure>
            <h2>{recipes.title}</h2>
            <p className="flex-spacing">Description: {recipes.description}</p>
            <button>View</button>
           </article>
    );
};

export default RecipeExcerpt