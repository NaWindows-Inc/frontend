import { SignUpFormValues, SignInFormValues } from '../typings'
import { API_URL } from '../config'

interface ResponseBase {
  success: true | false
}

interface SignUpSuccessResponse extends ResponseBase {
  success: true
  message: string
}

interface SignInSuccessResponse extends ResponseBase {
  success: true
  token: string
  username: string
  email: string
}

interface ErrorResponse extends ResponseBase {
  success: false
  errorCode: number
  errorMessage: string
}

type SignUpResponse = SignUpSuccessResponse | ErrorResponse
type SignInResponse = SignInSuccessResponse | ErrorResponse

const getAuthResponse = async (
  type: 'signup' | 'login',
  values: SignUpFormValues | SignInFormValues,
) => {
  const response = await fetch(`${API_URL}/${type}`, {
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

  if (response.status === 201) {
    return {
      success: true,
      message: data.response,
    }
  } else {
    return {
      success: false,
      errorCode: response.status,
      errorMessage: data.error,
    }
  }
}

const signIn = async (values: SignInFormValues): Promise<SignInResponse> => {
  const response = await getAuthResponse('login', values)
  const data = await response.json()

  if (response.status === 201) {
    return {
      success: true,
      token: data.token,
      username: data.username,
      email: data.email,
    }
  } else {
    return {
      success: false,
      errorCode: response.status,
      errorMessage: data.error,
    }
  }
}

const logout = (token: string) => {
  return fetch(`${API_URL}/logout`, {
    method: 'DELETE',
    headers: {
      'x-access-token': token,
    },
  })
}

const checkToken = async (token: string) => {
  const response = await fetch(`${API_URL}/hello`, {
    headers: {
      'x-access-token': token,
    },
  })
  const data = await response.json()

  if (data.valid) {
    return true
  } else {
    return false
  }
}

export { signUp, signIn, logout, checkToken }
