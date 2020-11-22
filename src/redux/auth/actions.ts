import { ActionType, Action } from './types'

const authUser = (username: string): Action => ({
  type: ActionType.AUTH_USER,
  username
})

const signOutUser = (): Action => ({
  type: ActionType.SIGN_OUT_USER,
})

export { authUser, signOutUser }
