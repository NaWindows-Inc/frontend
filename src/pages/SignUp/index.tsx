import React from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignUpForm, { FormValues } from './SignUpForm'
import { FormikHelpers } from 'formik'

const SignUp = () => {
  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      formikHelpers.setSubmitting(false)
    }, 3000)
  }

  return (
    <AuthPage
      title="Sign Up"
      linkTo={Routes.SIGN_IN}
      linkMessage="Already have an account? Sign in"
    >
      <SignUpForm handleSubmit={handleSubmit} />
    </AuthPage>
  )
}

export default SignUp
