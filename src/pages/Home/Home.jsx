import React from 'react'
import LogoHome from '../../components/LogoHome/LogoHome'
import HomeImg from '../../components/HomeImg/HomeImg'
import Section from '../Section/Section'
import Video from '../Video/Video'
import Information from '../Information/Information'
import Interesting from '../Interesting/Interesting'
import Digital from '../Digital/Digital'


const Home = () => {
  return (
    <div>
      <LogoHome/>
      <HomeImg/>
      <Section/>
      <Video/>
      <Information/>
      <Interesting/>
      <Digital/>
      
    </div>
  )
}

export default Home