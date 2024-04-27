import React, { useState } from "react";
import Input from "../Input/Input";
import CustomInput from "../Input/Input";
import { Link } from "react-router-dom";
import Catalog from "../Catalog/Catalog";

const Routers = () => {
    const[popup,SetPopup]=useState(false)
    const oppened =()=>{
        SetPopup(false)
    }
  return (
    <div>
      <div className="flex justify-between">
        <ul className="flex gap-[80px]">
          <div className="flex gap-6">
            <li className="cursor-pointer  hover:text-red-700" onClick={()=>{
                SetPopup(!popup)
            }} >Каталог</li>
            {
                popup &&(
                    <div className="mt-[59px] border-2 leading-[50px] w-[200px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white">
                       <div onClick={oppened}>
                       <Catalog/>
                       </div>
                    </div>
                )
            }
            <span className="text-black-600 w-1 ">&#9660;</span>
          </div>

          <Link to={'/about'}>
          <li className="cursor-pointer  hover:text-red-700">О нас</li>
          </Link>
         <Link to={'/modell'}>
         <li className="cursor-pointer  hover:text-red-700">3D Моделирование</li>
         </Link>
          <li className="cursor-pointer  hover:text-red-700">Покупателю</li>
          <li>Доставка и оплата</li>
        </ul>
        <CustomInput />
      </div>
    </div>
  );
};

export default Routers;
