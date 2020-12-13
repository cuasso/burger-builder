import React from 'react'
import Logo from '../../Logo'
import NavigationItems from '../NagivationItems'
import Backdrop from '../../UI/Backdrop'
import classes from './style.module.css'
import Aux from '../../../hoc/Aux'

const SideDrawer = props => {

    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer