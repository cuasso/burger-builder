import CartIcon from '../../../Cart/CartIcon'
import classes from './cartButton.module.css'

const CartButton = props => (
    <button className={classes.button}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
)

export default CartButton