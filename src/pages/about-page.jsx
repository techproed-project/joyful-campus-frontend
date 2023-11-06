import React from 'react'
import Welcome from '../components/about/welcome'
import PageHeader from '../components/common/page-header'
import Spacer from '../components/common/spacer'
import Instructors from '../components/about/instructors'

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us"/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <Instructors/>
      <Spacer/>
    </>
  )
}

export default AboutPage