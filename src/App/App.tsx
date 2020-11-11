import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Routes from '../constants/routes'
import { Dashboard, SignIn, SignUp } from '../pages'
import './App.scss'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path={Routes.DASHBOARD} component={Dashboard} />
        <Route exact path={Routes.SIGN_IN} component={SignIn} />
        <Route exact path={Routes.SIGN_UP} component={SignUp} />
      </Switch>
    </div>
  )
}

export default App
