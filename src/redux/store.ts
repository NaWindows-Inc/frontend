import { combineReducers, createStore } from 'redux'
import appReducer from './app'
import authReducer from './auth'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
