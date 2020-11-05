import React from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'

const SignIn = () => {
  return (
    <AuthPage
      title="Sign In"
      linkTo={Routes.SIGN_UP}
      linkMessage="Don't have an account? Sign Up"
    >
      Login Form <br />
    </AuthPage>
  )
}

export default SignIn
