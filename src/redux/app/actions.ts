import { ActionType, Action } from './types'

export const initializeApp = (): Action => ({
  type: ActionType.INITIALIZED_SUCCESS,
})
