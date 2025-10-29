import React from 'react'
import SiteNavbar from './SiteNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <SiteNavbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout