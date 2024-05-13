import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'

const Catalog = () => {

  return (
    <div>
      <Header/>
       <Outlet/>
    </div>
  )
}

export default Catalog