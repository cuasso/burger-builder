import React from 'react'
import Toolbar from '../Navigation/Toolbar'
import SideDrawe from '../Navigation/SideDrawer'
import Aux from '../../hoc/Aux'
import classes from './style.module.css'

const Layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawe />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default Layout