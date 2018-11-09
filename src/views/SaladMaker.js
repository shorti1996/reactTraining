import React, { Component } from 'react';
import Salad from '../components/Salad';
import prepareIngredients from '../utils/prepareIngredients';
import IngredientsHandler from '../components/IngredientsHandler';
import OrderForm from './OrderForm';

class SaladMaker extends Component {
    state = {
        ingredients: { },
        isReadyToOrder: false,
    };

    ingredientAdd = type => {
        if (this.state.ingredients[type] === undefined) {
            this.updateIngredient(type, 1);
        } else {
            this.updateIngredient(type, this.state.ingredients[type] + 1)
        }
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

    updateIngredient = (type, count) => {
        this.setState({
            ingredients: {
                ...this.state.ingredients,
                [type]: count
            }
        })
    }

    orderSalad = () => { 
        this.props.history.push({
            pathname: '/order-form',
            state: []
        })
    };

    render() {
        const preparedIngredients = prepareIngredients(this.state.ingredients);

        return (
            <div className="salad-maker">
                <h1>SaladMaker</h1>
                <IngredientsHandler ingredientAdd={this.ingredientAdd} ingredientRemove={this.ingredientRemove} />
                <button onClick={this.orderSalad}>Next step</button> 
                <Salad ingredients={preparedIngredients} />
            </div>
        );
    };
};

export default SaladMaker;