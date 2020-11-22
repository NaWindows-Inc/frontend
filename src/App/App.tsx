import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LayoutPreloader from '../components/LayoutPreloader'
import Routes from '../constants/routes'
import { Dashboard, SignIn, SignUp } from '../pages'
import { initializeApp } from '../redux/app/actions'
import { signOutUser } from '../redux/auth/actions'
import './App.scss'

const App = () => {
  const initialized = useSelector((state) => state.app.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      // TODO: check token
    } else {
      dispatch(signOutUser())
    }

    if (!initialized) {
      dispatch(initializeApp())
    }

    return () => {}
  }, [dispatch, initialized])

  if (!initialized) {
    return <LayoutPreloader />
  }

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
