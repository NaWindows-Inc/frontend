import { RootState } from '../redux/store'

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export { RootState }

export interface SignInFormValues {
  email: string
  password: string
}

export interface SignUpFormValues extends SignInFormValues {
  username: string
}


export interface BleData {
  mac: string
  time: string
  level: number
}