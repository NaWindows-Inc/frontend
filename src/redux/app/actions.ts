import { PaletteType } from '@material-ui/core'

import { RootState } from '../store'
import { ActionType, Action } from './types'

export const initializeApp = (): Action => ({
  type: ActionType.INITIALIZED_SUCCESS,
})

const setTheme = (theme: PaletteType): Action => ({
  type: ActionType.SET_THEME,
  theme,
})

export const toggleTheme = () => (dispatch: any, getState: () => RootState) => {
  const state = getState()

  if (state.app.theme === 'dark') {
    dispatch(setTheme('light'))
  } else {
    dispatch(setTheme('dark'))
  }
}
