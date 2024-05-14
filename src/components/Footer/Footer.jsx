import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-semibold flex gap-[50px]">
      
      <div className="pl-10">
        <Link to={"/company"}>
          <h2 className="text-2xl">О компании</h2>
        </Link>
        <Link to={"/production"}>
          <p className="text-gray-400 pt-4">Производство</p>
        </Link>
        <Link to={"/awards"}>
          <p className="text-gray-400">Награды</p>
        </Link>
        <Link>
          <p className="text-gray-400">Сертификаты</p>
        </Link>
      </div>
      <div className="pl-5">
        <h2 className="text-2xl">Покупателю</h2>

        <p className="text-gray-400 pt-4">Как сделать заказ</p>

        <p className="text-gray-400">Рекомендации по сборке</p>

        <p className="text-gray-400">Договор публичной оферты </p>
      </div>

      <div className="pl-5">
        <h2 className="text-2xl">Полезная информация</h2>

        <p className="text-gray-400 pt-4">Всё о фасадах</p>

        <p className="text-gray-400">Всё о фурнитуре</p>

        <p className="text-gray-400">Всё о ЛДСП </p>
      </div>

      <div className="pl-5">
        <Link to={"/modell"}>
          <h2 className="text-2xl">3D-моделирование</h2>
        </Link>

        <p className="text-gray-400 pt-4">
          Запустить онлайн,
          <br />
          от 2 Мбит/с
        </p>

        <p className="text-gray-400">
          Скачать на компьютер,
          <br />
          606 Мб
        </p>

        <p className="text-gray-400">Всё о ЛДСП </p>
      </div>

      <div>
        <h2>Рассрочка</h2>
        <hr />
        <h2>Гарантия</h2>
        <hr />
        <h2>Контакты</h2>
      </div>

      <div className="flex gap-3">
        <div>
        <img src="https://s3-alpha-sig.figma.com/img/f616/858a/c461d0327185da7b4867ed48da9c7038?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UlN4WH4O4LSQfy7-nSBwZH0vFaYCMGw0s26ZW9zMe5smPLGFxClsIe8xwklk9PCgPpVCCa4PqXhbMdTRWHBu87R9BdYtPzGB7rGrmWuf35mZODZXffCSbxWsHmDQzjCnZzX8Jc6f0iwiR25vj4HQdUtgorP9pLHKN4TEafU1GNGV9SSpwxpcImcAf2nc2C~mCxc0MnHbsddqt4NvTCVIYi2Srur4co42ZPplZb0OUcip6H0dqhBIRPjFz9F1MGJGbASuDBgX3Tp7BHPCYLFHM4In5tKuHkvK18YR5y9XI4DJoqj3nb~FXKWgqmIjprPrDDaxWkGT-aUYeT36OL3TDg__" alt="" />

        </div>
      <div>
      <img src="https://s3-alpha-sig.figma.com/img/1c75/2900/bdc267a1ce3d347cdddab1b6059ec6ae?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJ9xz3DKP8jNdr~ctp0pRIy~MGtzzmAcCiinF-5mx3od1iFOZNygQRhsgT1PDH4XcCcH2IQ97mAqotRcib2~woYz9dzOnv1weqI4YaACCZIbw1QF4EqPY2XMNgL~xBGEjEYfSJ9wo4ZgM5bP9LpDSfAZRZiUrWhHG-kVDrLBQgcIEyerZad7jnsUc8LiRJcMhFK2dwKBI3eawRI0JxeoeC64whf5eBYMwnXtHaT-hZmLUL3MxugPdsqISxeuiUwn71L9~pqjh-PNzZoECTkigxyieOoCUaados02M4sIauG-15sBiB9AICxuwGMcE890oLt1-nVDqKvKZaesVsn0ng__" alt="" />

      </div>
      </div>
    </div>
  );
};

export default Footer;
