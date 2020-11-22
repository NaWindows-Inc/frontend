export enum ActionType {
  AUTH_USER = 'auth/AUTH_USER',
  SIGN_OUT_USER = 'auth/SIGN_OUT_USER',
}

interface AuthUser {
  type: typeof ActionType.AUTH_USER
  username: string
}

interface SignOutUser {
  type: typeof ActionType.SIGN_OUT_USER
}

export type Action = AuthUser | SignOutUser

/////////////////////////////////////////////////////

export interface AuthState {
  isAuth: boolean
  username: string | null
}
