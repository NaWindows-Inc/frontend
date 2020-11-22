export enum ActionType {
  INITIALIZED_SUCCESS = 'app/INITIALIZED_SUCCESS',
}

type InitializedSuccess = {
  type: typeof ActionType.INITIALIZED_SUCCESS
}

export type Action = InitializedSuccess
