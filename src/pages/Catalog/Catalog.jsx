import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Catalog = () => {
  // const catalog = [1,2,3]
  return (
    <div>
      Catalog
       <Outlet/>
    </div>
  )
}

export default Catalog