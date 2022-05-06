import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
// import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../context/GlobalStateContext';


const PokeCard = props => {

	const navigate = useNavigate();
	const {states, setters, requests} = useContext(GlobalStateContext)

	
	// console.log("");
  	// console.log(`--- ${props.Poke.name} ---`);
  	// console.log("");

		// /details/bulbasaur
	const funcaoclick = () => {
		goToPage(navigate, `/details/${props.Poke.name}`)
		
	}

	// console.log("============");
	// console.log(states.pokeInform);
	// console.log(props);


	// const addToPokedex = () => {

	// 	const IndexPokemon = states.pokeInform.findIndex((value) => {
	// 		// console.log("value.name");
	// 		console.log(value);
	// 		// console.log("========");
	// 		return value.name === props.details.name
		
	// 	})
		
	// 	const novaListaPokemons = [...states.pokeInform]
	// 	novaListaPokemons.splice(IndexPokemon, 1)

	// 	const novaListaPokedex = [...states.pokedex, props.details]

	// 	setters.setPokedex(novaListaPokedex)
	// 	setters.setPokeInform(novaListaPokemons)
	// }

	// const removeFromPokedex = () => {
	// 	const IndexPokemon = states.pokedex.findIndex((value) => {
	// 	return value.name === props.details.name
	// 	})

	// 	const novaListaPokedex = [...states.pokedex]
	// 	novaListaPokedex.splice(IndexPokemon, 1)

	// 	const novaListPokemons = [...states.pokeInform, props.details]

	// 	setters.setPokedex(novaListaPokedex)
	// 	setters.setPokeInform(novaListPokemons)
	// }

	return (
		<Container>

			<PokemonNameCard>{props.Poke.name}</PokemonNameCard>
			<Img src={props.Poke.sprites.front_default} alt="teste" />

			<ContainerButton>

				{/* <Button 
					onClick={props.Pokedex ? removeFromPokedex() : addToPokedex() }
				>
						{props.Pokedex ? "Remover da Pokédex" : "Adicionar a Pokédex"}
				</Button> */}

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