import React, { useEffect, useState, useContext } from 'react'
import {Container, Img, ContainerButton, Button} from "./style"
import {goToPage} from "../../routes/coordinator"
import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'


const PokeCard = (props) => {

  const navigate = useNavigate();

  // useEffect (() => {
  //   detailPokemon()
  // },[])

  // const detailPokemon = () => {
  //   getDetailPokemon();
  // }

  return (
    <Container>
      <Img src={props.img} alt="teste" />
      {/* <p>{props.name && props.name}</p> */}
      <ContainerButton>
        <Button>Adicionar a Pokédex</Button>
        <Button onClick={() => goToPage(navigate, "/details")} >Ver detalhes</Button>
      </ContainerButton>
      
    </Container>
  )
}

export default PokeCard