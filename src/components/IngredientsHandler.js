import React from 'react';

const INGREDIENTS = [
    { label: 'Tomato', type: 'tomato' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
];

const IngredientsHandler = ({ ingredientAdd, ingredientRemove })  => {
    return (
        <ul className="ingredient-handler">
            {
                INGREDIENTS.map((ingredient, index) => (
                    <li key={index}>
                        {ingredient.label}
                        <button onClick={() => ingredientAdd(ingredient.type)}>+</button>
                        <button onClick={() => ingredientRemove(ingredient.type)}>-</button>
                    </li>
                ))
            }
        </ul>
    );
};

export default IngredientsHandler;