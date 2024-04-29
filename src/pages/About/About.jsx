import React from 'react'
import Container from '../../Helpers/Container'
import AboutContent from '../AboutContent/AboutContent'
import AboutText from '../AboutContent/AboutText/AboutText'
import Reasons from '../Reasons/Reasons'

const About = () => {
  return (
    <Container >
      <AboutContent/>
      <AboutText/>
      <Reasons/>
    </Container>
  )
}

export default About