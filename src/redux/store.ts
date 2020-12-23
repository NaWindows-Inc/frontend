import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appReducer from './app'
import authReducer from './auth'

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState')!)
  : {}

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
  localStorage.setItem(
    'reduxState',
    JSON.stringify({
      auth: store.getState().auth,
      app: { theme: store.getState().app.theme },
    }),
  )
})

export type RootState = ReturnType<typeof rootReducer>

export default store
