import React from 'react'
import Container from '../../../Helpers/Container'

const Diploma = () => {
  return (
    <div className='bg-gray-200 mt-10 py-10'>
    <Container>
      <p className='text-blue-600' >2018 год</p>
      <p className='text-2xl '>Мебельная компания "Лером" получила награды:</p>
      <p className='pt-5'>1 - Лауреат Всероссийского конкурса "100 лучших товаров России"
     за модульную программу мебели для детских и подростковых комнат "Карина",</p>
   <p>2 - Дипломант Всероссийского конкурса "100 лучших товаров России"
     за модульную программу мебели для прихожих "Карина",.</p>
   <p>3 - Дипломант Всероссийского конкурса "100 лучших товаров России"
     за модульную программу мебели для спален "Камелия".</p>


   <div className='flex justify-between gap-10 pt-10'>
    <img className='w-[300px]' src="https://www.lerom.ru/upload/resize_cache/iblock/901/161_230_0/90109bae4ad4fc9155b3b946335ae42a.jpg" alt="" />
    <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/701/161_230_0/7012973979c486d7ea87f002b4822b09.jpg" alt="" />
    <img className='w-[300px]'src="https://www.lerom.ru/upload/resize_cache/iblock/129/161_230_0/12956f5b45a073f66f966a8aec942f2f.jpg" alt="" />
   </div>
    </Container>
    </div>
  )
}

export default Diploma