import React, { Component } from 'react';
import FetchIngredients from '../services/FetchIngredients';


class IngredientsHandler extends Component {
    // INGREDIENTS = [
    //     { label: 'Tomato', type: 'tomato' },
    //     { label: 'Bacon', type: 'bacon' },
    //     { label: 'Chesse', type: 'cheese' },
    //     { label: 'Salad', type: 'salad' },
    //     { label: 'Meat', type: 'meat' },
    // ];
    state = {
        ingredients: [],
        isFetching: true,
        isError: false,
    };

    componentDidMount = () => {
        FetchIngredients().then((response) => {
            // console.log(response)
            this.setState({
                ingredients: response.data
            })
        }).catch((err) => {
            
        });
    }

    render() {
        console.log(this.state)
        return (
            <ul className="ingredient-handler">
                {
                    this.state.ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {console.log(ingredient)}
                            {ingredient.label}
                            <button onClick={() => this.props.ingredientAdd(ingredient.type)}>+</button>
                            <button onClick={() => this.props.ingredientRemove(ingredient.type)}>-</button>
                        </li>
                    ))
                }
            </ul>
        );
    }
};

export default IngredientsHandler;