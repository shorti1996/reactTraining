import React from 'react';
import SaladMaker from './SaladMaker'
import { shallow } from 'enzyme';
import IngredientsHandler from '../components/IngredientsHandler';
import OrderForm from '../components/OrderForm';

describe('SaladMaker', () => {
    it('should render without crash', () => {
        const sut = createSut();
        
        expect(sut.isEmptyRender()).toBe(false);
    });

    it('should match snapshot', () => {
        const sut = createSut();

        expect(sut).toMatchSnapshot();
    });

    let sut;

    beforeEach(() => {
        sut = createSut();
    })

    describe('salad ingredients', () => {

        it('should pass empty ingredients to salad by default', () => {
            expect(sut.find('Salad').props().ingredients).toEqual([]);
        })

        it('should pass incremented count of specified ingredient when such ingredient not exists', () => {
            const INGREDIENT = 'INGREDIENT';
            sut.setState({ingredients: {}});

            sut.find(IngredientsHandler).props().ingredientAdd(INGREDIENT);

            expect(sut.find('Salad').props().ingredients).toEqual([INGREDIENT]);
        })

        it('should pass incremented count of specified ingredient when such ingredient exists', () => {
            const INGREDIENT = 'INGREDIENT';
            sut.setState({ingredients: { [INGREDIENT]: 1 }});
            
            sut.find(IngredientsHandler).props().ingredientAdd(INGREDIENT);

            expect(sut.find('Salad').props().ingredients).toEqual([INGREDIENT, INGREDIENT]);
        })
    });

    describe('order form', () => {
        it('should form be hidden by default', () => {
            expect(sut.find('OrderForm').exists()).toBe(false);
        });

        it('should be visible after click on order button', () => {
            const button = sut.find('button');
            button.simulate('click');
            expect(sut.find('OrderForm').exists()).toBe(true);
        });
    });
    
    const createSut = () => shallow(<SaladMaker />);
});

// describe('OrderForm', () => {
//     let sut;

//     beforeEach(() => {
//         sut = createSut();
//     })

//     it('should form be hidden by default', () => {
//         expect(sut.find('Salad').props().ingredients).toEqual([]);
//     });

//     const createSut = () => shallow(<OrderForm />);
// });