import React from 'react'
import Logo from '../../Logo'
import NavigationItems from '../NagivationItems'
import classes from './style.module.css'

const SideDrawer = props => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </div>
    )
}

export default SideDrawer