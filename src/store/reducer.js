import * as actionTypes from './actions';

const initialState = {
    ingredients : {}
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT:
        const ingredientsCount = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] + 1 : 1
        return {
            ...state,
            [action.ingredientType]: ingredientsCount

        }
        case actionTypes.REMOVE_INGREDIENT:
        const ingredientsCount = state.ingredients[action.ingredientType] ? state.ingredients[action.ingredientType] - 1 : 0
        return {
            ...state,
            [action.ingredientType]: ingredientsCount

        }
        default:
        return state;
    }
};


export default reducer;