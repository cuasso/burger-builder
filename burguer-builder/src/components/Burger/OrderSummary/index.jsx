import React from 'react'
import Button from '../../UI/Button'
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
            <p><strong>Total Price: {props.totalPrice.toFixed(2)} </strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button >
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary