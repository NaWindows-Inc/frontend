import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import LayoutPreloader from '../components/LayoutPreloader'
import Routes from '../constants/routes'
import { Dashboard, SignIn, SignUp, Chart } from '../pages'
import { initializeApp } from '../redux/app/actions'
import { signOutUser } from '../redux/auth/actions'
import { checkToken } from '../services/authAPI'
import './App.scss'

const App = () => {
  const initialized = useSelector((state) => state.app.initialized)
  const dispatch = useDispatch()

  useEffect(() => {
    const effect = async () => {
      const token = localStorage.getItem('token')

      if (token) {
        const isValid = await checkToken(token)
        if (!isValid) {
          dispatch(signOutUser())
        }
      } else {
        dispatch(signOutUser())
      }

      if (!initialized) {
        dispatch(initializeApp())
      }
    }

    effect()
  }, [dispatch, initialized])

  if (!initialized) {
    return <LayoutPreloader />
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path={Routes.DASHBOARD} component={Dashboard} />
        <Route exact path={Routes.CHART} component={Chart} />
        <Route exact path={Routes.SIGN_IN} component={SignIn} />
        <Route exact path={Routes.SIGN_UP} component={SignUp} />
      </Switch>
    </div>
  )
}

export default App
