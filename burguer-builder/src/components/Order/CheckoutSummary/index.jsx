import React from 'react'
import Burger from '../../Burger'
import Button from '../../UI/Button'

import classes from './style.module.css'

const CheckoutSumarry = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it taste well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.onCheckoutCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.onCheckoutContinue}>CONTINUE</Button>
        </div>
    )
}

export default CheckoutSumarry