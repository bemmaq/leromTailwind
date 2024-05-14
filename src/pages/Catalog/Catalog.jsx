import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Catalog = () => {

  return (
    <div>
      <Header/>
       <Outlet/>
       <hr className='my-10' />
       <Footer/>
    </div>
  )
}

export default Catalog