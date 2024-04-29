import React from 'react'
import { Link } from 'react-router-dom'
import vertor12 from "../../../../assets/Vector-12.svg";

const RoomProduct = () => {
  return (
    <div className="ml-[240px] ">
    <div className="flex gap-4 ">
      <Link to={"/"}>
        <div className="flex gap-1">
          <p className="cursor-pointer hover:text-red-700 focus:text-red-700">
            Главная
          </p>
          <img className="pt-1" src={vertor12} alt="" />
        </div>
      </Link>
      
      <Link to={"/catalog/room"}>
        <div className="flex gap-1">
          <p className="cursor-pointer hover:text-red-700 focus:text-red-700">
            Новинки
          </p>
          <img className="pt-1" src={vertor12} alt="" />
        </div>
      </Link>
    </div>
    <h2 className="text-2xl ">Гостиные</h2>
  </div>
  )
}

export default RoomProduct