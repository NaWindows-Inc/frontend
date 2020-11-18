import { SignUpFormValues, SignInFormValues } from '../typings'
import { API_URL } from '../config'

const signUp = (values: SignUpFormValues) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  })
}

const signIn = (values: SignInFormValues) => {
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  })
}

const logout = (token: string) => {
  return fetch(`${API_URL}/logout`, {
    method: 'DELETE',
    headers: {
      'x-access-token': token,
    },
  })
}

export { signUp, signIn, logout }
