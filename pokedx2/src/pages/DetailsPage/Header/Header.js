import React from 'react'
import { Container, Button } from './styled'

import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"


const Header = props => {

  console.log(props.poke);
  
  const navigate = useNavigate();
  return (
    <Container>
      <Button onClick={() => goToPage(navigate, "/")}>Voltar</Button>
      <Button onClick={() => goToPage(navigate, "/pokedex")}>Ir para a Pokédex</Button>
      

    </Container>
  )
}

export default Header