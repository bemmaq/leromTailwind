import React from "react";
import { Link } from "react-router-dom";

const Catalog = () => {
  return (
    <div className="">
      <ul>
        <Link to={'/catalog/new/'}>
          <div className="flex gap-[74px]">
            <li className="pl-[15px] cursor-pointer hover:text-red-700 focus:text-red-700">
              Новинки
            </li>
            <span className="text-black-800 w-[10px]">&#9660;</span>
          </div>
          <hr />
        </Link>
        <Link to={'/catalog/room/'}>
          <div className="flex gap-[65px]">
            <li className="pl-[15px] cursor-pointer hover:text-red-700 focus:text-red-700">
              Гостинные
            </li>
            <span className="text-black-800 w-[10px]">&#9660;</span>
          </div>
          <hr />
        </Link>
        <Link to={'/catalog/hall/'}>
          <div className="flex gap-[65px]">
            <li className="pl-[15px] cursor-pointer hover:text-red-700 focus:text-red-700">
              Прихожие
            </li>
            <span className="text-black-800 w-[10px]">&#9660;</span>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Catalog;
