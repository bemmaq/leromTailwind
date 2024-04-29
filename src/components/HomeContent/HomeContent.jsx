import React from "react";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";

const HomeContent = () => {
  return (
    <div>
      <div className="w-[900px] m-auto">
        <div className="text-white">
          <h2 className="text-5xl pt-[50px]">
            Производим мебель <br />с 1997 года
          </h2>
          <p className="pt-10 text-xl">
            Мы готовы принять и передать ваш заказ на мебель <br />
            региональному представительству.
          </p>
          <p className="pt-5">
            Для этого пришлите ваши пожелания и контактную <br />
            информацию нам на почту zakaz@lerom.ru
          </p>
        </div>
        <div className="flex gap-[250px]">
          <div className="bg-white w-[50px] h-[50px] rounded-[50px] mt-[50px] flex gap-5  ">
            <img
              className=" pt-[15px] pl-[15px] w-10 px-1 pb-4"
              src={img1}
              alt=""
            />

            <div className="text-white">
              <div className="flex">
                
                <p className="text-2xl">100 000</p>
                <p>м2</p>
              </div>
              <p className="text-sx">Производственная площадь.</p>
            </div>
          </div>
          <div className="bg-white w-[50px] h-[50px] rounded-[50px] mt-[50px] flex gap-5 ">
            <img
              className=" pt-[15px] pl-[15px] w-10 px-1 pb-4"
              src={img2}
              alt=""
            />

            <div className="text-white">
              <p className="text-2xl">1100чел</p>
              <p className="text-xs">Рабочий коллектив.</p>
            </div>
          </div>
          <div className="bg-white w-[50px] h-[50px] rounded-[50pc] mt-[50px] flex gap-5 ">
            <img
              className=" pt-[15px] pl-[15px] w-10 px-1 pb-4"
              src={img3}
              alt=""
            />

            <div className="text-white">
              <p className="text-2xl">Официально</p>
              <p className="text-xs w-[250px]">
                Мы находимся в национальном реестре промышленных предприятий.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
