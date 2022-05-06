import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"

import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../context/GlobalStateContext';


const PokeCard = props => {

	const navigate = useNavigate();
	const {states, setters, requests} = useContext(GlobalStateContext)

	const funcaoclick = () => {
		goToPage(navigate, `/details/${props.Poke.name}`)
		
	}

	
	console.log(states);


	const addToPokedex = () => {
		const IndexPokemon = states.pokeInform.findIndex((value) => {
			return value.name === states.pokemons.name
		})
		
		const novaListaPokemons = [...states.pokeInform]
		novaListaPokemons.splice(IndexPokemon, 1)

		const novaListaPokedex = [...states.pokedex, props.details]

		setters.setPokedex(novaListaPokedex)
		setters.setPokeInform(novaListaPokemons)
	}

	const removeFromPokedex = () => {
		const IndexPokemon = states.pokemons.findIndex((value) => {
			console.log(" value");
			console.log(value);
			return value.name === props.details.name
		})

		const novaListaPokedex = [...states.pokedex]
		novaListaPokedex.splice(IndexPokemon, 1)

		const novaListPokemons = [...states.pokeInform, props.details]

		setters.setPokedex(novaListaPokedex)
		setters.setPokeInform(novaListPokemons)
	}

	return (
		<Container>

			<PokemonNameCard>{props.Poke.name}</PokemonNameCard>
			<Img src={props.Poke.sprites.front_default} alt="teste" />

			<ContainerButton>

				<Button 
					onClick={states.pokedex ? removeFromPokedex : addToPokedex }
				>
						{states.pokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
				</Button>

				<Button
					onClick={() => funcaoclick()}
				>
					Ver detalhes
				</Button>
			</ContainerButton>
			
		</Container>
	)
}

export default PokeCard