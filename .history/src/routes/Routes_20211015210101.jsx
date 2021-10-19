/* eslint-disable no-unused-vars */
import React from 'react'
import { Route,Switch } from 'react-router'




const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component ={Home}/>
    </Switch>
  )
}

export default Routes
