import React from 'react'
import classes from './style.module.css'
import burgerLogo from '../../assets/images/burger-logo.png'

const Logo = props => (
    <div className={classes.Logo} style={{ height: props.height }}>
        <img src={burgerLogo} alt="burger-logo" />
    </div>
)

export default Logo