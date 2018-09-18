import React from 'react';
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import CartPage from './pages/CartPage'
import ShopPage from './pages/ShopPage'

const Router = () => (
    <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/shop' component={ShopPage} />
    </Switch>
)

export default Router