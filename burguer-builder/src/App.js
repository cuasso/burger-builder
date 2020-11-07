import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './containers/Layout'
import Checkout from './containers/Checkout'
import BurgerBuilder from './containers/BurgerBuilder'
import Orders from './containers/Orders'

const App = () => {
  return (
    <div>
      <Layout>
        <Switch >
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  )
}

export default App
