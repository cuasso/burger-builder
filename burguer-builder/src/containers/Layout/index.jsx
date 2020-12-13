import React, { Component } from 'react'
import { connect } from 'react-redux'

import Aux from '../../hoc/Aux'
import Toolbar from '../../components/Navigation/Toolbar'
import SideDrawe from '../../components/Navigation/SideDrawer'
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
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClicked={this.sideDraweToggleHander} />
                <SideDrawe 
                    open={this.state.showSideDrawer}
                    isAuth={this.props.isAuthenticated}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)