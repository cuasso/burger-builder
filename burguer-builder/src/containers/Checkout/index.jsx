import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import ContactData from '../Checkout/ContactData'
import CheckoutSummary from '../../components/Order/CheckoutSummary'

class Checkout extends Component {

    CheckoutCancelledHandler = () => this.props.history.goBack()

    CheckoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ings}
                    onCheckoutCancelled={this.CheckoutCancelledHandler}
                    onCheckoutContinue={this.CheckoutContinueHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout)