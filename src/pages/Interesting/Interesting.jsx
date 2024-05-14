import React from 'react'
import strelka from '../../assets/Vector01.svg'
import strelkaa from '../../assets/Vector88.svg'

const Interesting = () => {
  return (
    <div className="flex">


<div className="w-[380px] h-[253px] border-2 py-[30px] px-[25px]">
 <h3 className="font-semibold text-2xl">Бесплатная 
сборка</h3>
 <p>Мини текст описания новости
и ее актуальности</p>
 
 <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px] text-blue-100">
   <img className="py-[15px] px-[15px]" src={strelka} alt="" />
 </div>
</div>
<div>
<img className="h-[253px]" src="https://s3-alpha-sig.figma.com/img/56a8/84db/919d4b3bede5ec1a085d661192cecb65?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xl2mfuaG5gcZgF6SVAGCvDzlP9ylUFAaIopE68l~30iYSrb4xVI5SLeRicCKdRVEVfOJPwssWI6TKCIPMaN6ZL9NE96txxLgumyXGJKelQK9LFU5g9x~twhu0FXtGBEN7piMNR4fEFDqt3YAtUCjEEl54zSFCKJqAtv1J0GNpZIpq0eJqFChrAQi4c4r-eygTf07iXWwqMCJiD~5sdB44julaoDVGxql~uaJvVgxYvCy~dlzQFSVVGDg9xZUe4xKNmk5-XJg6pQGWwJeWguDhT0Ozkrin1YqRWM3O6bEInliXGSs-PvvVWUgpiXc1tcDJTIalL2aG-PWkO7T3wG3OQ__" alt="" />
<div className='flex gap-5 mt-3'>
<p className='text-xl pl-20'>показать еще новости</p>
<img className='pt-1' src={strelkaa} alt="" />
</div>
</div>

<div>

<div className="w-[360px] h-[253px] border-2 py-[30px] px-[25px]">
 <h3 className="font-semibold text-2xl">Какой шкаф выбрать 
в 2022 году</h3>
 <p>Мини текст описания новости
и ее актуальности</p>
 <div className="mt-[30px] w-[50px] border-2 h-[50px] rounded-[50px]">
 <img className="py-[15px] px-[15px]" src={strelka} alt="" />
 </div>
</div>
<div className='flex gap-5 mt-3 text-blue-400'>
<p className='text-xl pl-20'>открыть раздел новости</p>
<img className='pt-1' src={strelkaa} alt="" />
</div>
</div>

<div>
<img className="h-[253px]" src="https://s3-alpha-sig.figma.com/img/8598/206e/8f8c98ec82860b7390229343bb851a22?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T9~LuIL72KpDeJ-nOppwTTmYLEQFHDRvNMUPbzWEJxJjCyCZr6v7ZBTyuAZRaad7xNjCLvdGU5eTpqnlBZIJ3XxuHO9N3oTNyafH-GWP3qva5g7MOCLIkN6ysKcPDFGF8117oLg5Hzs8eQVveFN9mLYOMLCDrz6bO7DqFxEaYuugDB2trUjXmobagaT~mvQl~m2vtpHW4nl0D0rurN9AjHAZwlxpVaKyAlOUsIpPwV54broagzt1zC6UYeCnw0e1p65TvFa0QBr6xcVyOziGxU9lcGCkoX6WPgqRifdBnKwgHmNaNPtrEPkjGy9OLS7EIQuaFTHdQlNYE1RZSqnTBQ__" alt="" />
</div>
</div>
  )
}

export default Interesting