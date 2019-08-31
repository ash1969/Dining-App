import React from 'react'
import Aux from '../../../hoc/Auxillary'


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
         <p>Continue to checkout?</p>
     </Aux>
    );
};

export default orderSummary;