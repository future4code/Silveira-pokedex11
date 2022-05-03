import React from 'react'
import { Container, Button, Title } from './styled'

import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"


const Header = () => {

  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => goToPage(navigate, "/")}>Voltar para a lista de Pokémons</Button>
      <Title>Pokédex</Title>

    </Container>
  )
}

export default Header