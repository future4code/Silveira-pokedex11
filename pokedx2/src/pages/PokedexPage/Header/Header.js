import React from 'react'
import { Container, Button, Title } from './styled'

import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"


const Header = () => {

  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => goToPage(navigate, -1)}>Voltar </Button>
      <Title>Pokédex</Title>

    </Container>
  )
}

export default Header