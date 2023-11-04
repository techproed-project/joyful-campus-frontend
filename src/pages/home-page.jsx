import React from 'react'
import Slider from '../components/home/slider'
import Welcome from '../components/about/welcome'
import Spacer from '../components/common/spacer'
import FeaturedCourses from '../components/home/featured-courses'

const HomePage = () => {
  return (
    <>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <FeaturedCourses/>
      <Spacer/>
    </>
  )
}

export default HomePage