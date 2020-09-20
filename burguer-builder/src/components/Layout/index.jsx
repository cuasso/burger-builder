import React, { Component } from 'react'
import Toolbar from '../Navigation/Toolbar'
import SideDrawe from '../Navigation/SideDrawer'
import Aux from '../../hoc/Aux'
import classes from './style.module.css'

class Layout extends Component {
    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDraweToggleHander = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar  drawerToggleClicked={this.sideDraweToggleHander}/>
                <SideDrawe open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }
}

export default Layout