import React from 'react'
import rectangle from '../../assets/Rectangle 12.svg'
import vertor9 from '../../assets/Vector (9).svg'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div  className="bg-cover bg-center h-[500px] "
    style={{ backgroundImage: `url(${rectangle})` }}>
        <h2 className='text-4xl text-center pt-20 text-white'>Видеопрезентация <br /> «Лером»</h2>

        <div className="mt-[70px] ml-[45rem] w-[90px] border-2 h-[90px] rounded-[50px] bg-white">
            <a href="https://youtu.be/qa5MtoHO6Hs">
            <img className='pl-5 pt-5' src={vertor9} alt="" />
            </a>
        </div>
        <Link to={'/company'}>
        
        <button className='border-2 rounded-3xl w-[200px] h-[50px] ml-[42rem] text-white mt-20'>Читать о компании</button>
        </Link>
    </div>
  )
}

export default Video