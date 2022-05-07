import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
// import { getPokemons, getDetailPokemon, getPokemonsTypes } from '../../services/requests';
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../context/GlobalStateContext';


const PokeCard = props => {

	const navigate = useNavigate();
	const {states,setters,requests,func} = useGlobal()

	const funcaoclick = () => {
		goToPage(navigate, `/details/${props.Poke.name}`)
		
	}

	// console.log(states.pokedex);
	// console.log(props.Poke);

	const escolha = () => {
		const checkIndex = states.pokedex && states.pokedex.findIndex((pok) => {
			// console.log('====');
			// console.log(pok);
			// console.log(`pok.id ${pok}`);
			// console.log(props.Poke);
			// console.log('====');
			// console.log(pok);
			// console.log("pok");
			if(pok.id === props.Poke.id){
				return pok.id
			} else {
			return -1
			}
			
		})
		// console.log("passou ");
		
		if (states.pokedex === undefined ) {
			return func.addToPokedex(props.Poke)
		}else {
			// console.log('else');
			if (checkIndex !== -1 ) {
				// console.log('else if');
				return func.addToPokedex(props.Poke)
			} else {
				// console.log('else else');
					
				return func.removeFromPokedex(props.Poke)
			}

		}
	}

	return (
		<Container>

			<PokemonNameCard>{props.Poke.name}</PokemonNameCard>
			<Img src={props.Poke.sprites.front_default} alt="teste" />

			<ContainerButton>
{/* 
				<Button 
					onClick={ addToPokedex }
				>
						Adicionar a Pokédex
				</Button> */}
					<Button 
						onClick={escolha}
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