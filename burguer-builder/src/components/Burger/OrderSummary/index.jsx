import React from 'react'

import Aux from '../../../hoc/Aux'

const OrderSummary = props => {
    const ingredientSummmary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                </span>: {props.ingredients[igKey]}
            </li>
        })

    return (
        <Aux >
            <h3>Your Order</h3>
            <p>A delicious burger whith the following ingredients:</p>
            <ul>
                {ingredientSummmary}
            </ul>
            <p>Continue to Checkout?</p>
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Aux>
    )
}

export default OrderSummary