import React, { useEffect, useState, useContext } from 'react'
import {Container, Img, ContainerButton, Button} from "./style"
import {goToPage} from "../../routes/coordinator"
import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'


const PokeCard = (props) => {

	const navigate = useNavigate();
	
	const funcaoclick = () => {

		goToPage(navigate, "/details")
	
	}

	return (
		<Container>
		<Img src={props.Poke.sprites.front_default} alt="teste" />
		{/* <p>{props.name && props.name}</p> */}
		<ContainerButton>
			<Button>Adicionar a Pokédex</Button>
			<Button onClick={() => funcaoclick() } >Ver detalhes</Button>
		</ContainerButton>
		
		</Container>
	)
}

export default PokeCard