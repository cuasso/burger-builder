import React from 'react'
import Logo from '../../Logo'
import NavigationItems from '../NagivationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle'
import classes from './style.module.css'

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle  clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar