import React from 'react'
import logo from '../../assets/logo1.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div>
       <Link to={'/'}> 
       <img src={logo} alt="" />
       </Link>
    </div>
  )
}

export default Logo