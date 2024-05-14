import React from 'react'
import logo from '../../assets/logo1.svg'
import esv from '../../assets/Demos Pages Support.svg'
import { Link } from 'react-router-dom'
const Digital = () => {
  return (
    <div className='flex justify-between mt-10'>
        <p className='text-gray-300 pt-5'>©  ООО "Мебельная <br /> компания "Лером" 2021   </p>
        <Link to={'/'}>
        <img src={logo} alt="" />
        </Link>
        <div className='flex gap-[12px]'>
        
        <img src={esv} alt="" />
        </div>
    </div>
  )
}

export default Digital