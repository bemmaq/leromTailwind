import React from "react";
import tel from "../../assets/tel.svg";

const Tel = () => {
  return (
    <div>
      <div className="flex gap-3">
        <p>Отдел продаж:</p>
        <img src={tel} alt="" />
        <span>8 (929) 928-86-35</span>
      </div>
      <span className="pl-[143px]">8 (495) 664-54-57</span>
      <div className="flex gap-3">
        <p>Звонки по  Р.Ф:</p>
        <img src={tel} alt="" />
        <span className="mr-[20px]">8-800-000-00-00</span>
      </div>
      <p className="pl-[143px] text-red-500">Бесплатно</p>
    </div>
  );
};

export default Tel;
