import React from 'react'
import Container from '../../Helpers/Container'
import All from '../All/All'
import Lerom from './Lerom/Lerom'
import TheWinner from './TheWinner/TheWinner'
import Diploma from './Diploma/Diploma'
export const Awards = () => {
  return (
      <div className="font-semibold">
    <Container>
      <h2 className="text-3xl pt-10">Награды</h2>
      <All/>
      <div>

      </div>
      </Container>
      <Lerom/>
      <TheWinner/>
      <Diploma/>
      </div>
  )
}
