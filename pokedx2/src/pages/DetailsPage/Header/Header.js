import React from 'react'
import { Container, NomePokemon, Buttons } from './styled'
import { useNavigate } from 'react-router-dom'
import {goToPage} from "../../../routes/coordinator"
import { useGlobal } from '../../../context/GlobalStateContext';
import voltar from '../../../imgs/Voltar.png';
import irPokedex from '../../../imgs/IrPokedex.png'


const Header = props => {
const {states,setters,requests,func} = useGlobal()

  
  const navigate = useNavigate();
  return (
    <Container>
      <Buttons onClick={() => goToPage(navigate, "/")}><img src={voltar} /></Buttons>
      <NomePokemon>{props.poke.toUpperCase()}</NomePokemon>
      <Buttons onClick={() => goToPage(navigate, "/pokedex")}><img src={irPokedex} /></Buttons>
    </Container>
  )
}

export default Header