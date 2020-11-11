import React from 'react'
import Header from '../../components/Header'
import Routes from '../../constants/routes'
import withAuthorization from '../../hocs'

const Dashboard = () => {
  return (
    <div>
      <Header />
      Dashboard
    </div>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Dashboard)
