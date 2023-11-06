import React from 'react'
import Events from '../components/events/events'
import Spacer from '../components/common/spacer'
import PageHeader from '../components/common/page-header'

const EventsPage = () => {
  return (
    <>
      <PageHeader title="Events"/>
      <Spacer/>
      <Events/>
      <Spacer />
    </>
  )
}

export default EventsPage