import { AuthState, Action, ActionType } from './types'

let initialState: AuthState = {
  isAuth: false,
}

const authReducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return {
        ...state,
        isAuth: true,
      }
    case ActionType.SIGN_OUT_USER:
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state
  }
}

export default authReducer
