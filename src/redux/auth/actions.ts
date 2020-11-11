import { ActionType, Action } from './types'

const authUser = (): Action => ({
  type: ActionType.AUTH_USER,
})

const signOutUser = (): Action => ({
  type: ActionType.SIGN_OUT_USER,
})

export { authUser, signOutUser }
