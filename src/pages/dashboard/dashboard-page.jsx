import React from 'react'
import PageHeader from "../../components/common/page-header";
import Spacer from "../../components/common/spacer";
import DashboardNavigation from '../../components/dashboard/home/dashboard-navigation';

const DashboardPage = () => {
  return (
    <>
    <PageHeader title="Dashboard"/>
    <Spacer/>
    <DashboardNavigation/>
    <Spacer/>    
    </>
  )
}

export default DashboardPage