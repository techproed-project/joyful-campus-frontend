import React from 'react'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import LoginForm from '../components/login/login-form'

const LoginPage = () => {
  return (
    <>
        <PageHeader title="Login"/>
        <Spacer/>
        <LoginForm/>
        <Spacer/>
    </>
  )
}

export default LoginPage