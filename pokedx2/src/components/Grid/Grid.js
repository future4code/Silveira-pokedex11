import React from 'react'
import styled from 'styled-components'

import PokeCard from '../PokeCard/PokeCard'

const ContainerGrid = styled.div`
  border: dotted black 1px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: center;
  grid-gap: 15px;
  padding: 10px;
`

const Grid = () => {
  return (
    <>
      <ContainerGrid >
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </ContainerGrid>
  
    </>
  )
}

export default Grid