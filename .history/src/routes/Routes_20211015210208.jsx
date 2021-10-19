/* eslint-disable no-unused-vars */
import React from 'react'
import { Route,Switch } from 'react-router'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'



const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component ={Home}/>
    </Switch>
  )
}

export default Routes
