import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux'
import axios from '../../axios-orders'
import Burger from '../../components/Burger'
import Modal from '../../components/UI/Modal'
import Spinner from '../../components/UI/Spinner'
import WithErrorHandler from '../../hoc/WithErrorHandler'
import OrderSummary from '../../components/Burger/OrderSummary'
import BuildControls from '../../components/Burger/BuildControls'
import * as actionTypes from '../../store/actions'

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios.get('https://burger-builder-2cf97.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => {
                this.setState({ error: true })
            })
    }

    updatePurchaseHandler = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false })
    }

    purchaseContinuehandler = () => {
        this.props.history.push('/checkout')
    }

    render() {
        const disableInfo = {
            ...this.props.ings
        }

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }
        let orderSummary = null
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />
        if (this.props.ings) {
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BuildControls
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        ordered={this.purchaseHandler}
                        price={this.props.price}
                        purchasable={this.updatePurchaseHandler(this.props.ings)}
                        disabled={disableInfo}
                    />
                </Aux>
            )
            orderSummary = (
                <OrderSummary ingredients={this.props.ings}
                    totalPrice={this.props.price}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinuehandler}
                />
            )
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WithErrorHandler(BurgerBuilder, axios))