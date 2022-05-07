import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetails, goToPage } from '../../routes/coordinator';
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { useGlobal } from '../../context/GlobalStateContext';


import { HeaderContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, DetailContainerList, Buttons, CartPokedex} from "./style";


import pokeballWhiteIcon from "../../imgs/pokeballWhite-icon.png";
import remover from "../../imgs/Remover-da-Pokedex.png";
import detalhes from "../../imgs/Detalhes.png";
import limpar from "../../imgs/Limpar-Pokedex.png";
import pokedex from "../../imgs/Pokedex.png";
import pokeballIcon from "../../imgs/pokeball-icon.png"
import voltar from "../../imgs/Voltar.png"


	// o estato onde estaguardado o pokemons adicionados a pokedex é o pokemonPokedex

function PokedexPage() {
	
	const [image , setImage] = useState("")
	const [ imageContainer, setImageContainer ] = useState('')

	const navigate = useNavigate()
	const {states,setters,requests} = useGlobal()

	console.log(states);

	const renderPokemonsList = states.pokemons && states.pokemons.map((pokemon, props) => {
		return (
			<ListPokedexContainer key={props.pokemon}>
				<DetailContainerList onClick={() => onClickImage(pokemon)}>
					<img src={''} alt="pokemons"/>
					<p>{props.pokemon}</p>
					<img src={pokeballWhiteIcon}/>
				</DetailContainerList>
			</ListPokedexContainer>
		)
	})

	const removeFromPokedex = (pokemon) => {
		const newPokemonsPokedex = [... states.pokemons]
		const index = states.pokemons.findIndex(
			(item) => item.name === pokemon.name
		);

		newPokemonsPokedex.splice(index, 1)
		setters.setPokemonPokedex(newPokemonsPokedex)

		const newPokemons = [... states.pokemonsHome, pokemon];
		const orderedPokemons = newPokemons.sort((a, b) => {
			return a.id - b.id;
		})
		setters.setPokemonsHome(orderedPokemons)
		setImageContainer('')
	}

	const CleanPokedex = () => {
		setters.setPokemonPokedex([])
		requests.getPokemons(setters.setPokemons)
		setImageContainer('')
	}
	
	const onClickImage = (pokemon, props) => {
		setImageContainer(
			<CartPokedex>
				<img src={props.Poke.sprites.front_default} alt={props.Poke.name} />
				<Buttons>
					<a onClick={() => removeFromPokedex(pokemon)}><img src={remover} alt="Remover" /> alert(adicionado)</a>
					<a onClick={() => goToDetails(navigate, props.pokemon.name)}><img src={detalhes} alt="Detalhes"/></a> 
				</Buttons>
			</CartPokedex>
		)
	}


	return (
		<GlobalStateContext.Provider value={{image , setImage}}>
			<PokedexPageContainer>
				<HeaderContainer>
					<a onClick={() => goToPage(navigate, "/")}><img src={voltar} alt='Voltar'/></a>

					<img src={ pokedex } alt='Pokédex'/>

					<a onClick={ CleanPokedex } ><img src={limpar} alt='Limpar Tela'/></a>

					<NumContainer>
						<img src={pokeballIcon} />

						<p>{states.pokemons.length}</p>
					</NumContainer>
				</HeaderContainer>

				<MainContainer>

					<PokemonContainer>
						{imageContainer}
					</PokemonContainer>

					<ListContainer>
						{renderPokemonsList}
					</ListContainer>

				</MainContainer>
			</PokedexPageContainer>
		</GlobalStateContext.Provider>

	)
}

export default PokedexPage