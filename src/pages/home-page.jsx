import React from 'react'
import Slider from '../components/home/slider'
import Welcome from '../components/about/welcome'
import Spacer from '../components/common/spacer'
import FeaturedCourses from '../components/home/featured-courses'
import UpcomingEvents from '../components/home/upcoming-events'
import MobileApp from '../components/home/mobile-app'

const HomePage = () => {
  return (
    <>
      <Slider/>
      <Spacer/>
      <Welcome/>
      <Spacer/>
      <FeaturedCourses/>
      <Spacer/>
      <UpcomingEvents/>
      <Spacer/>
      <MobileApp/>
    </>
  )
}

export default HomePage