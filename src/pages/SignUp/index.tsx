import React from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignUpForm from './SignUpForm'
import { FormikHelpers } from 'formik'
import withAuthorization from '../../hocs'
import { signUp } from '../../services/authAPI'
import { SignUpFormValues } from '../../typings'

const SignUp = () => {
  const handleSubmit = async (
    values: SignUpFormValues,
    formikHelpers: FormikHelpers<SignUpFormValues>,
  ) => {
    const response = await signUp(values)
    console.log(response)
    formikHelpers.setSubmitting(false)
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

const condition = (isAuth: boolean) => isAuth

export default withAuthorization(condition, Routes.DASHBOARD)(SignUp)
