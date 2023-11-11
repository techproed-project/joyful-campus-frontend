import React from 'react'
import { Spinner } from 'react-bootstrap'
import "./loading-spinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <Spinner size="lg" animation="border" variant="primary"/>
      <img src="/images/logo/icon.png" alt="logo"/>
    </div>
  )
}

export default LoadingSpinner