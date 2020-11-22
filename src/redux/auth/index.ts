import { AuthState, Action, ActionType } from './types'

let initialState: AuthState = {
  isAuth: false,
  username: null,
}

const authReducer = (state = initialState, action: Action): AuthState => {
  switch (action.type) {
    case ActionType.AUTH_USER:
      return {
        ...state,
        isAuth: true,
        username: action.username,
      }
    case ActionType.SIGN_OUT_USER:
      return {
        ...state,
        isAuth: false,
        username: null,
      }
    default:
      return state
  }
}

export default authReducer
