import React, { useState } from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignUpForm from './SignUpForm'
import { FormikHelpers } from 'formik'
import withAuthorization from '../../hocs/withAuthorization'
import { signUp } from '../../services/authAPI'
import { SignUpFormValues } from '../../typings'

const SignUp = () => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState<'success' | 'error'>('error')
  const [message, setMessage] = useState('')

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const handleSubmit = async (
    values: SignUpFormValues,
    formikHelpers: FormikHelpers<SignUpFormValues>,
  ) => {
    const response = await signUp(values)
    if (response.success) {
      setSeverity('success')
      setMessage(response.message)
      setOpen(true)
    } else {
      setSeverity('error')
      setMessage(response.errorMessage)
      setOpen(true)
    }
    formikHelpers.setSubmitting(false)
  }

  return (
    <AuthPage
      title="Sign Up"
      noTitleStyles={severity === 'success'}
      linkTo={Routes.SIGN_IN}
      linkMessage={
        severity === 'success'
          ? 'Go to sign in'
          : 'Already have an account? Sign in'
      }
      alertSeverity={severity}
      alertOpen={open}
      alertMessage={message}
      alertHandleClose={handleClose}
    >
      {severity === 'success' ? (
        <p>You have been successfully registered</p>
      ) : (
        <SignUpForm handleSubmit={handleSubmit} />
      )}
    </AuthPage>
  )
}

const condition = (isAuth: boolean) => isAuth

export default withAuthorization(condition, Routes.DASHBOARD)(SignUp)
