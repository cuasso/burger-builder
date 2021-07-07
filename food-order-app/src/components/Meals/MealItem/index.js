import classes from './mealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {
    const { name, description, price } = props.meal
    const fixedPrice = `${price.toFixed(2)}`

    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fixedPrice}</div>
            </div>
            < MealItemForm id={props.id} />
        </li>
    )
}

export default MealItem