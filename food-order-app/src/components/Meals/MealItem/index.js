import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

import classes from './mealItem.module.css'
import MealItemForm from './MealItemForm'


const MealItem = props => {
    const cartCtx = useContext(CartContext)
    const { name, description, price } = props.meal
    const fixedPrice = `${price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: name,
            amount: amount,
            price: price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fixedPrice}</div>
            </div>
            < MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </li>
    )
}

export default MealItem