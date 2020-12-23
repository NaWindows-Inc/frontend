import { PaletteType } from '@material-ui/core'

export enum ActionType {
  INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS',
  SET_THEME = 'app/SET_THEME',
}

type InitializedSuccess = {
  type: ActionType.INITIALIZED_SUCCESS
}

type SetTheme = {
  type: ActionType.SET_THEME
  theme: PaletteType
}

export type Action = InitializedSuccess | SetTheme
