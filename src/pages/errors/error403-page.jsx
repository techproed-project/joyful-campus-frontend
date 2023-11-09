import React from 'react'
import PageHeader from '../../components/common/page-header'
import Error403 from '../../components/errors/error403'
import Spacer from '../../components/common/spacer'

const Error403Page = () => {
  return (
    <>
      <PageHeader title="Forbidden"/>
      <Spacer/>
      <Error403/>
      <Spacer/>
    </>
  )
}

export default Error403Page