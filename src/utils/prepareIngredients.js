
const prepareIngredients = ingredients => {
    const result = [];
    
    Object.keys(ingredients).forEach(ingredientName => {
        for(let i = 0; i < ingredients[ingredientName]; i++) {
            result.push(ingredientName);
        }
    });
    
    return result;
};

export default prepareIngredients;