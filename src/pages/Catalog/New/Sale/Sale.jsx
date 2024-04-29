
import React from "react";

const Sale = () => {
  return (
    <div>
      <div className="grid grid-cols-3 ml-[240px] gap-5 pt-7">
        <div >
          <img
          className="h-auto w-full max-w-full"
            // width={320}
            src="https://www.lerom.ru/upload/iblock/a1b/stqpo0ybfgpjq1vnfh6umyd8c3kuybys.jpg"
            alt=""
          />
          <p className="text-center pt-3 cursor-pointer hover:text-red-700 focus:text-red-700">Карина</p>
        </div>
        <div>
          <img
          className="h-auto w-full max-w-full"
            // width={320}
            src="https://www.lerom.ru/upload/iblock/278/otm9bqej31hzw8z0fa4qi9t6mo8cn5uv.jpg"
            alt=""
          />
          <p className="text-center pt-3 cursor-pointer hover:text-red-700 focus:text-red-700">Грэйс</p>
        </div>
        <div>
          <img
          className="h-auto w-full max-w-full"
            // width={320}
            src="https://www.lerom.ru/upload/iblock/9b3/9b376899a15033314d8fbea835440346.jpg"
            alt=""
          />
          <p className="text-center pt-3 cursor-pointer hover:text-red-700 focus:text-red-700">Карина</p>
        </div>
      </div>

      
    </div>
  );
};

export default Sale;