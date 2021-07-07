import { Fragment } from "react"

import classes from './header.module.css'
import mealsImg from '../../../assets/meals.jpg'
import CartButton from "./CartButton"

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <CartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt="a tabke full of delicius food" />
            </div>
        </Fragment>
    )
}

export default Header