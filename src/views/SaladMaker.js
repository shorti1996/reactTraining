import React, { Component } from 'react';
import Salad from '../components/Salad';
import prepareIngredients from '../utils/prepareIngredients';
import IngredientsHandler from '../components/IngredientsHandler';
import OrderForm from '../components/OrderForm';

class SaladMaker extends Component {
    state = {
        ingredients: {
            tomato: 1,
            bacon: 2,
            cheese: 3,
            salad: 4,
            meat: 5,
        },
        isReadyToOrder: false,
    };

    ingredientAdd = type => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] + 1
            }
        })
    };

    ingredientRemove = type => {
        if (this.state.ingredients[type] <= 0) return;
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] - 1
            }
        })
    };

    orderSalad = () => { this.setState({ isReadyToOrder: true }) };

    render() {
        const preparedIngredients = prepareIngredients(this.state.ingredients);

        return (
            <div className="salad-maker">
                <h1>SaladMaker</h1>
                <Salad ingredients={preparedIngredients} />
                <IngredientsHandler ingredientAdd={this.ingredientAdd} ingredientRemove={this.ingredientRemove} />
                { this.state.isReadyToOrder
                    ? <OrderForm /> 
                    : <button onClick={this.orderSalad}>Next step</button> 
                }
            </div>
        );
    };
};

export default SaladMaker;