import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Navigation } from './components/Navigation'
import { Profile } from './pages/Profile'

interface RoutesProps {

}

export const Routes: React.FC<RoutesProps> = () => {
  return <BrowserRouter>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>
}