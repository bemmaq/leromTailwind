import React from 'react'
import Container from '../../Helpers/Container'
import Grafic from '../Grafic/Grafic'
import Logo from '../Logo/Logo'
import Tel from '../Tel/Tel'
import Routers from '../Routers/Routers'

const Header = () => {
  return (
    <div className='mt-10 font-semibold'>

      <Container>
     <div className='flex justify-between'>
     <Grafic/>
        <Logo/>
        <Tel/>
     </div>
      </Container>
      <hr className='pt-3'/>
      <Container>
      <Routers/>
      </Container>
      <hr/>
    </div>
  )
}

export default Header