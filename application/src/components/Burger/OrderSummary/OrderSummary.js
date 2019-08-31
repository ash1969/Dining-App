import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>;
    });

    return(
     <Aux>
         <h3>Namaste, Your Order!</h3>
         <ul>
             {ingredientSummary}
         </ul>
         <strong>Total Price: ₹{props.price}</strong>
         <p>Continue to checkout?</p>
         <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
         <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
     </Aux>
    );
};

export default orderSummary;