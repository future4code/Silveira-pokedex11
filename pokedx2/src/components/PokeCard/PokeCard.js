import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
// import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../context/GlobalStateContext';


const PokeCard = props => {

	const navigate = useNavigate();
	const {states,setters,requests} = useGlobal()

	// console.log(states);
	
	// console.log("");
  	// console.log(`--- ${props.Poke.name} ---`);
  	// console.log("");

		// /details/bulbasaur
	const funcaoclick = () => {
		goToPage(navigate, `/details/${props.Poke.name}`)
		
	}

	console.log(states.pokedex);

	const addToPokedex = (poke) => {
		const IndexPokemon = states.pokeInform.findIndex((value) => {
			// console.log("value.name");
			// console.log("========");
			// console.log(value.name);
			// console.log("========");
			return value.name === poke.name
		
		})
		const novaListaPokemons = [...states.pokeInform]
		
		// console.log(states.pokemons);
		// console.log(states.pokeInform);

		// console.log(novaListaPokemons);
		
		novaListaPokemons.splice(IndexPokemon, 1)
		
		// console.log(novaListaPokemons);

		if (states.pokedex === undefined ){
			const novaListaPokedex = [ props.Poke ]

			// console.log("========");
			// console.log(novaListaPokedex);
			// console.log("========");

			setters.setPokedex(novaListaPokedex)
			setters.setPokeInform(novaListaPokemons)

		} else {
			
			const novaListaPokedex = [...states.pokedex, props.Poke]

			setters.setPokedex(novaListaPokedex)
			setters.setPokeInform(novaListaPokemons)

		}
		
	}

	const removeFromPokedex = () => {
		const IndexPokemon = states.pokedex.findIndex((value) => {
		
			return value.name === props.Poke.name
		
		})


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


				<Button 
					onClick={ addToPokedex }
				>
						Adicionar a Pokédex
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