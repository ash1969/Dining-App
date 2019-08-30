import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    bacon: 1,
    meat: 1.5,
}

class BurgerBuilder extends Component {
    state = {
       ingredients: {
           salad: 0,
           cheese: 0,
           bacon: 0,
           meat: 0,
       },
       totalPrice: 5 
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount= oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount= oldCount - 1;
        if(updatedCount < 0)
           return;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    }
    
    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo)
        {
            disabledInfo[key] = this.state.ingredients[key] <= 0;
        }

        return (
          <Aux>
              <Burger ingredients = {this.state.ingredients}/>
              <BuildControls 
                ingredientAdded={this.addIngredientHandler}
                ingredientRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                price={this.state.totalPrice} />
          </Aux>
        );
    }
}

export default BurgerBuilder;