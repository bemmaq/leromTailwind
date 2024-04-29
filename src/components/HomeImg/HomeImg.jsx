import React from "react";
import imgg1 from "../../assets/imgg1.svg";
import imgg2 from "../../assets/imgg2.svg";
import imgg3 from "../../assets/imgg3.svg";
import imgg4 from "../../assets/imgg4.svg";
import strelka from "../../assets/strelka.svg";

const HomeImg = () => {
  return (
    <div>
      <div className="flex">
        <img src={imgg1} width={380} alt="" />
        <div className="w-[380px] h-[340px] border-2 py-[30px] px-[25px]">
          <h3 className="font-semibold text-3xl">Гостинные</h3>
          <br />
          <p>Мини текст описания и преимущества покупки данного направления.</p>
          <br />
          <p>Товары под заказ в наличии: 2030шт</p>
          <br />
          <p>Цены от: 42.000р</p>
          <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px] text-blue-100">
            <img className="py-[15px] px-[15px]" src={strelka} alt="" />
          </div>
        </div>
        <div>
          <img src={imgg2} width={380} alt="" />
        </div>
        <div className="w-[380px] h-[340px] border-2 py-[30px] px-[25px]">
          <h3 className="font-semibold text-3xl">Спальни</h3>
          <br />
          <p>Мини текст описания и преимущества покупки данного направления.</p>
          <br />
          <p>Товары под заказ в наличии: 2030шт</p>
          <br />
          <p>Цены от: 42.000р</p>
          <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px]">
            <img className="py-[15px] px-[15px]" src={strelka} alt="" />
          </div>
        </div>
      </div>
      <div className="flex">
     
        <div className="w-[380px] h-[340px] border-2 py-[30px] px-[25px]">
          <h3 className="font-semibold text-3xl">Детские</h3>
          <br />
          <p>Мини текст описания и преимущества покупки данного направления.</p>
          <br />
          <p>Товары под заказ в наличии: 2030шт</p>
          <br />
          <p>Цены от: 42.000р</p>
          <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px] text-blue-100">
            <img className="py-[15px] px-[15px]" src={strelka} alt="" />
          </div>
       
        </div>
        <img src={imgg3} width={380} alt="" />
        <div>
          
        </div>
        <div className="w-[380px] h-[340px] border-2 py-[30px] px-[25px]">
          <h3 className="font-semibold text-3xl">Прихожие</h3>
          <br />
          <p>Мини текст описания и преимущества покупки данного направления.</p>
          <br />
          <p>Товары под заказ в наличии: 2030шт</p>
          <br />
          <p>Цены от: 42.000р</p>
          <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px]">
            <img className="py-[15px] px-[15px]" src={strelka} alt="" />
          </div>
        </div>
        <img src={imgg4} width={380} alt="" />
      </div>
    </div>
  );
};

export default HomeImg;
