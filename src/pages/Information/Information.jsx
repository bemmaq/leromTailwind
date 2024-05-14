import React from 'react'
import Delivery from '../Delivery/Delivery'

const Information = () => {
  return (
    <div>
        <div className='flex justify-around my-10 font-semibold text-2xl'>
            <h2>Информация  </h2>
            <h2>Интересное</h2>
        </div>
        <Delivery/>
    </div>
  )
}

export default Information