import React from 'react'
import Container from '../../../Helpers/Container'

const Lerom = () => {
  return (
    <div className='bg-gray-200 mt-10 py-10'>
    <Container>
      <p className='text-blue-600' >2021 год</p>
      <p className='text-2xl '>Мебельная компания "Лером" получила награды:</p>
      <p className='pt-5'>1 - Лауреат Всероссийского конкурса "100 лучших товаров России" 
   за модульную программу мебели для гостиных "Камелия",</p>
   <p>2 - Дипломант Всероссийского конкурса "100 лучших товаров России" 
   за модульную программу мебели для спален "Мелисса".</p>
   <p>3 - Лауреат Областного конкурса "100 лучших товаров России"
   за модульную программу мебели для гостиных "Камелия".</p>
   <p>4 - Лауреат Областного конкурса "100 лучших товаров России" 
   за модульную программу мебели для спален "Мелисса".</p>

   <div className='flex justify-between gap-10 pt-10'>
    <img className='w-[300px]' src="https://www.lerom.ru/upload/resize_cache/iblock/a65/161_230_0/a65f6c66ba678fb9fad40f2e550c6dd9.jpg" alt="" />
    <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/a77/161_230_0/a776783a6f43917a9dd9998080364acc.jpg" alt="" />
    <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/a77/161_230_0/a7748d83b9c4e1637f1dad95f8f70758.jpg" alt="" />
    <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/344/161_230_0/34402aaa949242ff32d243217c803669.jpg" alt="" />
   </div>
    </Container>
    </div>
  )
}

export default Lerom