import React from 'react'
import PageHeader from "../../components/common/page-header"
import Spacer from "../../components/common/spacer"
import LessonTabs from '../../components/dashboard/lesson/lesson-tabs'

const LessonPage = () => {
  return (
    <>
        <PageHeader title="Lessons"/>
        <Spacer/>
        <LessonTabs/>
        <Spacer/>

        
    </>
  )
}

export default LessonPage  