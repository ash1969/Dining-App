import React, { Component } from 'react'
import Aux from '../../../hoc/Auxillary/Auxillary'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>;
        });

        return (
        <Aux>
            <h3>Namaste, Your Order!</h3>
            <ul>
                {ingredientSummary}
            </ul>
            <strong>Total Price: ₹{this.props.price}</strong>
            <p>Continue to checkout?</p>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        </Aux>
        );
        }
}

export default OrderSummary;