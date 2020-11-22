import { combineReducers, createStore } from 'redux'
import appReducer from './app'
import authReducer from './auth'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')!)
  : {}

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
  localStorage.setItem(
    'reduxState',
    JSON.stringify({ auth: store.getState().auth }),
  )
})

export type RootState = ReturnType<typeof rootReducer>

export default store
