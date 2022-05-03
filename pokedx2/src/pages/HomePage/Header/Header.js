import React from 'react'
import { Container, Button, Title } from './styled'

import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"


const Header = () => {

  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => goToPage(navigate, "/pokedex")}>Ir para Pokédex</Button>
      <Title>Lista de Pokémons</Title>

    </Container>
  )
}

export default Header