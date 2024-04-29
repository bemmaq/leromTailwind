import React from 'react'
import Container from '../../../Helpers/Container'
import Catalog from '../../../components/Catalog/Catalog'
import HallwaysProduct from './HallwaysProduct/HallwaysProduct'
import HallSale from './HallSale/HallSale'
import HallBlock from './HallBlock/HallBlock'

const Hallways = () => {
    
  return (
    <div className="mt-[30px] font-semibold">
      <div>
        <Container>
        <div className=" border-2 leading-[50px] w-[200px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white">
          <Catalog />
        </div>
        <HallwaysProduct/>
        <HallSale/>
        <HallBlock/>
        </Container>
      </div>
       </div>
  )
}

export default Hallways