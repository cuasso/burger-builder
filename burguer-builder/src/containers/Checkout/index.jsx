import React, { Component } from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 3,
            bacon: 2
        }
    }

    CheckoutCancelledHandler = () => this.props.history.goBack()

    CheckoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.CheckoutCancelledHandler}
                    onCheckoutContinue={this.CheckoutContinueHandler} />
            </div>
        )
    }
}

export default Checkout