import React from "react";
import strelka from '../../assets/Vector99.svg'

const Delivery = () => {
  return (
    <div className="flex">
         <div>
      <img src='https://s3-alpha-sig.figma.com/img/f1b6/7716/baf3bb9cf559120663ce4d162bbc56a7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XMU5xt1Y-F~S8HAFR2RU8Wg7pLvbk1bL0l0CamVizTkUfrBa8w~AV-OlR7XF93lW1l18gqqpH3wFrvO0iCu2YE8MK9rD2snlXymXQ4NsPS9JUGNrF2saOZQ3mY87QfFXzC~-0F4mCjjsUfrv7DxfLjVe~JfjDnGTJ5U-YA7lrQInc-SujH1HcswyKiSm1VsfW1yBYvCL0q63PfbPuPOznW9DZhmm2ChSZvMdId0lEx-znwHhM09pEVJZfYVbwmi1dVTG5ENB1rREQGSuBZUbbpe2HqlwAJAyHSOA6y4TmcNhz8iBCrCHhmvZxdDndqrbtzvDPuTRRJdJ0jkjbfRFcw__' width={380} alt="" />
    </div>
    
    <div className="w-[380px] h-[253px] border-2 py-[30px] px-[25px]">
      <h3 className="font-semibold text-2xl">Доставка по всей России</h3>
      <p>Мини текст описания новости
и ее актуальности</p>
      
      <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px] text-blue-100">
        <img className="py-[15px] px-[15px]" src={strelka} alt="" />
      </div>
    </div>
   
   <div>
    <img className="h-[253px]" src="https://s3-alpha-sig.figma.com/img/5a63/2c11/c3346319a114c4798ba0d39284624d1a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTg3mg1co-P3MWFLqFKHnh4-zFPK22hyz2FnUJzZClfH9~oj4ik8BrxI1Zz2lAumEp8z8Cz0q9196ceQut1CHheW2D2Q17fQG~~9t60zOQW0uCK1KoakqSzNrQEORdrRzK~3vo0PDX3qlKDgP6UQiDByWJMnM7lbhMcUH2gnQwJvJyURSLjmehRL-EUKUxpezQsbgE7V1~ynhwSwfCwB-vIk6ekA9dIGIOxy0MPq8E88RqKoey~XuSG7hYZ-7ks~qdvOY0TF5Uri6gUKqPzCnXcjaEFoG2MxJ7pJi5ugV8SS8UqY3pnSNfZHWPi7o6z4JgHTIy2Q28LKvTtCh0Ox-Q__" alt="" />
   </div>
    <div className="w-[380px] h-[253px] border-2 py-[30px] px-[25px]">
      <h3 className="font-semibold text-2xl">Как выбрать матрас</h3>
      <p>Мини текст описания новости
и ее актуальности</p>
      <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px]">
      <img className="py-[15px] px-[15px]" src={strelka} alt="" />
      </div>
    </div>
  </div>
  );
};

export default Delivery;
