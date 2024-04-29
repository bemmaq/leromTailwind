import React from 'react'
import Container from "../../../Helpers/Container";
import Catalog from '../../../components/Catalog/Catalog';
import RoomProduct from './RoomProduct/RoomProduct';
import RoomBlock from './RoomBlock/RoomBlock';
import RoomsSale from './RoomsSale/RoomsSale';

const Rooms = () => {
   
  return (
    <div className="mt-[30px] font-semibold">
      <Container>
      <div className=" border-2 leading-[50px] w-[200px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white">
        <Catalog/>
      </div>
      <RoomProduct/>
      <RoomBlock/>
      <RoomsSale/>
      </Container>
    </div>
  )
}

export default Rooms