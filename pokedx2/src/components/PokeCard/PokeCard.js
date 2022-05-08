import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../context/GlobalStateContext';


const PokeCard = props => {

	const navigate = useNavigate();
	const {states,func} = useGlobal()

	const funcaoclick = () => {
		goToPage(navigate, `/details/${props.Poke.name}`)
		
	}


	const escolha = () => {
		const checkIndex = states.pokedex && states.pokedex.findIndex((pok) => {

			if(pok.id === props.Poke.id){
				return pok.id
			} else {
			return -1
			}
			
		})
		
		if (states.pokedex === undefined ) {
			return func.addToPokedex(props.Poke)
		}else {

			if (checkIndex !== -1 ) {
				return func.addToPokedex(props.Poke)
			} else {
				return func.removeFromPokedex(props.Poke)
			}

		}
	}

	return (
		<Container>

			<PokemonNameCard>{props.Poke.name}</PokemonNameCard>
			<Img src={props.Poke.sprites.front_default} alt="teste" />

			<ContainerButton>

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