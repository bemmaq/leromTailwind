import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <hr className='my-10'/>
        <Footer/>
    </div>
  )
}

export default Layout