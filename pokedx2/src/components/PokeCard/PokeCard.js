import React, { useContext } from 'react'
import {Container, Img, ContainerButton, Button, PokemonNameCard} from "./style"
import {goToPage} from "../../routes/coordinator"
import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../context/GlobalStateContext';
import adicionarpokedex from "../../imgs/Adicionar-a-Pokedex.png"
import detalhes from "../../imgs/Detalhes.png"

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

			<PokemonNameCard>{props.Poke.name.toUpperCase()}</PokemonNameCard>
			<Img src={props.Poke.sprites.front_default} alt="teste" />

			<ContainerButton>

					<Button 
						onClick={escolha}
					>
							<img src={adicionarpokedex} />
						</Button>

				<Button
					onClick={() => funcaoclick()}
				>
					<img src={detalhes} />
				</Button>
			</ContainerButton>
			
		</Container>
	)
}

export default PokeCard