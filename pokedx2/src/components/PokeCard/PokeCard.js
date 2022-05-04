import React, { useEffect, useState, useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'


const PokeCard = (props) => {

	const navigate = useNavigate();
	
	const funcaoclick = () => {

		goToPage(navigate, `/details/${props.Poke.name}`)
	
	}

	return (
		<Container>
			<PokemonNameCard>{props.Poke.name}</PokemonNameCard>
		<Img src={props.Poke.sprites.front_default} alt="teste" />
		<ContainerButton>
			<Button>Adicionar a Pokédex</Button>
			<Button onClick={() => funcaoclick() } >Ver detalhes</Button>
		</ContainerButton>
		
		</Container>
	)
}

export default PokeCard