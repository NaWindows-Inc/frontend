import { Action, ActionType } from './types'

let initialState = {
  initialized: false,
}
type InitialState = typeof initialState

const appReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export default appReducer
