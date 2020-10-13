import React, { Component } from 'react'
import Button from '../../UI/Button'
import Aux from '../../../hoc/Aux'

class OrderSummary extends Component {
    
    render() {
        const ingredientSummmary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}
                    </span>: {this.props.ingredients[igKey]}
                </li>
            })

        return (
            <Aux >
                <h3>Your Order</h3>
                <p>A delicious burger whith the following ingredients:</p>
                <ul>
                    {ingredientSummmary}
                </ul>
                <p><strong>Total Price: {this.props.totalPrice.toFixed(2)} </strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button >
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary