import React from 'react'
import Topbar from '../components/common/topbar'
import Menubar from '../components/common/menubar'
import Footer from '../components/common/footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        <Topbar/>
        <Menubar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default UserLayout