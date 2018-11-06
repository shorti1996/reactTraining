import React from 'react';
import SaladIngredient from './SaladIngredient';

const Salad = ({ ingredients }) => {
    return (
        <div className="salad">
            <ul>
                {
                    ingredients.map((ingredient, index) => (
                        <SaladIngredient type={ingredient} key={index} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Salad;