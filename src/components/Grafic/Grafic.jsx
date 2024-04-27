import React from "react";
import ocloc from "../../assets/ocloc.svg";
import nav from '../../assets/navigator.svg'

const Grafic = () => {
  return (
    <div>
      <div className="flex gap-3">
        <img src={ocloc} alt="" />
        <p>Пн-Пт с 10:00 до 20:00</p>
      </div>
      <p className="pl-8"> Сб-Вс с 10:00 до 19:00</p>
      <div className="flex gap-3 mt-3">
        <img src={nav} alt="" />
        <a className="text-blue-900" href="">Наши салоны</a>
      </div>
    </div>
  );
};

export default Grafic;
