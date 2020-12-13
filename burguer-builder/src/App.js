import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './containers/Layout'
import Checkout from './containers/Checkout'
import BurgerBuilder from './containers/BurgerBuilder'
import Logout from './containers/Auth/Logout'
import Orders from './containers/Orders'
import Auth from './containers/Auth'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch >
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/auth' component={Auth} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
