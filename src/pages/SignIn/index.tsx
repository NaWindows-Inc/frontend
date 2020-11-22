import React, { useState } from 'react'
import { FormikHelpers } from 'formik'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignInForm, { FormValues } from './SignInForm'
import withAuthorization from '../../hocs'
import { useDispatch } from 'react-redux'
import { authUser } from '../../redux/auth/actions'
import { signIn } from '../../services/authAPI'

const SignIn = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    const response = await signIn(values)
    console.log(response)
    if (response.success) {
      dispatch(authUser(response.username))
      localStorage.setItem('token', response.token)
    } else {
      setMessage(response.errorMessage)
      setOpen(true)
      formikHelpers.setSubmitting(false)
    }
  }

  return (
    <AuthPage
      title="Sign In"
      linkTo={Routes.SIGN_UP}
      linkMessage="Don't have an account? Sign Up"
      alertSeverity={'error'}
      alertOpen={open}
      alertMessage={message}
      alertHandleClose={handleClose}
    >
      <SignInForm handleSubmit={handleSubmit} />
    </AuthPage>
  )
}

const condition = (isAuth: boolean) => isAuth

export default withAuthorization(condition, Routes.DASHBOARD)(SignIn)
