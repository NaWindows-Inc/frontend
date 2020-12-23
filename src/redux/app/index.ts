import { PaletteType } from '@material-ui/core'

import { Action, ActionType } from './types'

let initialState = {
  initialized: false,
  theme: 'dark' as PaletteType,
}
type InitialState = typeof initialState

const appReducer = (state = initialState, action: Action): InitialState => {
  switch (action.type) {
    case ActionType.INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    case ActionType.SET_THEME:
      return {
        ...state,
        theme: action.theme,
      }
    default:
      return state
  }
}

export default appReducer
