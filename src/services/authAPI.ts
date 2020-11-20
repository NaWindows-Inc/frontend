import { SignUpFormValues, SignInFormValues } from '../typings'
import { API_URL } from '../config'

interface SignUpResponse {
  status: number
  data: { error: string | null; response: string | null }
}

const getAuthResponse = async (
  type: 'signup' | 'login',
  values: SignUpFormValues | SignInFormValues,
) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(values),
  })

  return response
}

const signUp = async (values: SignUpFormValues): Promise<SignUpResponse> => {
  const response = await getAuthResponse('signup', values)
  const data = await response.json()

  return { status: response.status, data: data }
}

const signIn = async (values: SignInFormValues) => {
  const response = await getAuthResponse('login', values)
  const data = await response.json()

  return { status: response.status, data: data }
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
