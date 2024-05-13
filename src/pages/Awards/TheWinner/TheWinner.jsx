import React from 'react'
import Container from '../../../Helpers/Container'

const TheWinner = () => {
  return (
    <Container>
    <p className='text-blue-600 pt-10' >2019 год</p>
    <p className='text-2xl '>Мебельная компания "Лером" получила награды:</p>
    <p className='pt-5'>1 - Лауреат Всероссийского конкурса "100 лучших товаров России" 
     за модульную программу мебели для гостиных "Карина",</p>
 <p>2 - Дипломант Всероссийского конкурса "100 лучших товаров России" 
     за модульную программу мебели для спален "Карина".</p>
 <p>3 - Лауреат Областного конкурса "100 лучших товаров России"
     за модульную программу мебели для гостиных "Карина".</p>
 <p>4 - Лауреат Областного конкурса "100 лучших товаров России" 
     за модульную программу мебели для спален "Карина"..</p>

 <div className='flex justify-between gap-10 pt-10'>
  <img className='w-[300px]' src="https://www.lerom.ru/upload/resize_cache/iblock/a65/161_230_0/a65f6c66ba678fb9fad40f2e550c6dd9.jpg" alt="" />
  <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/7a7/161_230_0/7a784d74b3529333b048ef826436e87f.jpg" alt="" />
  <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/40f/161_230_0/40fac760031355b16b3d9043da5e512e.jpg" alt="" />
  <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/40f/161_230_0/40fac760031355b16b3d9043da5e512e.jpg" alt="" />
 </div>
  </Container>
  )
}

export default TheWinner