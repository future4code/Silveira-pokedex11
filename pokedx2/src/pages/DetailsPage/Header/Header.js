import React from 'react'
import { Container, Button } from './styled'

import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"
import { useGlobal } from '../../../context/GlobalStateContext';


const Header = props => {
const {states,setters,requests,func} = useGlobal()

  
  const navigate = useNavigate();
  return (
    <Container>
      {/* <Button onClick={() => func.addToPokedex(props.Pokemon)}>Voltar</Button> */}
      <Button onClick={() => goToPage(navigate, "/")}>Adicionar na pokedex</Button>
      <h1>{props.poke}</h1>


      <Button onClick={() => goToPage(navigate, "/pokedex")}>Ir para a Pokédex</Button>
      

    </Container>
  )
}

export default Header