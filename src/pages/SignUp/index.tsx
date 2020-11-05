import React from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'

const SignUp = () => {
  return (
    <AuthPage
      title="Sign Up"
      linkTo={Routes.SIGN_IN}
      linkMessage="Already have an account? Sign in"
    >
      Register Form <br />
    </AuthPage>
  )
}

export default SignUp
