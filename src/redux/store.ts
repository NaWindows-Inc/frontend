import { combineReducers, createStore } from 'redux'
import authReducer from './auth'

const rootReducer = combineReducers({
  auth: authReducer,
})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store
