

import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetails, goToPage,goToHomePage } from '../../routes/coordinator';
import { GlobalStateContext } from "../../context/GlobalStateContext";
// import { getPokemons } from "../../services/requests";
import { useGlobal } from '../../context/GlobalStateContext';

import pokeballWhiteIcon from "../../imgs/pokeballWhite-icon.png";
import remover from "../../imgs/Remover-da-Pokedex.png";
import detalhes from "../../imgs/Detalhes.png";
import limpar from "../../imgs/Limpar-Pokedex.png";
import pokedex from "../../imgs/Pokedex.png";
import pokeballIcon from "../../imgs/pokeball-icon.png"
import voltar from "../../imgs/Voltar.png"
import { HeaderContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, DetailContainerList, Buttons, CartPokedex} from "./style";

function PokedexPage() {
	const [image , setImage] = useState("")

	const {states,setters,requests,func} = useGlobal()
	
	const [ imageContainer, setImageContainer ] = useState('')
	
	const navigate = useNavigate()



	const renderPokemonsList = states.pokedex && states.pokedex.sort((a, b) => a.id - b.id).map((pokemon, index) => {
		console.log(pokemon);
		return (
			<ListPokedexContainer key={index}>
				<h3>{pokemon.name.toUpperCase()}</h3>
				{pokemon.sprites ? (
					<img src={pokemon.sprites.front_default} alt={pokemon.name}/>
				) : (
					null
				)
			}
					<img src={pokeballWhiteIcon}/>
					<button onClick={() => { func.removeFromPokedex(pokemon) }}>Remover da Pokedex</button>
			</ListPokedexContainer>
		)
	})

	// const removeFromPokedex = (pokemon) => {
	// 	const newPokemonsPokedex = [...states.pokedex]
	// 	const index = states.pokemons.findIndex(
	// 		(item) => item.name === pokemon.name
	// 	);

	// 	newPokemonsPokedex.splice(index, 1)
	// 	setters.setPokedex(newPokemonsPokedex)

	// 	const newPokemons = [... states.pokemonsHome, pokemon];
	// 	const orderedPokemons = newPokemons.sort((a, b) => {
	// 		return a.id - b.id;
	// 	})
	// 	setters.setPokemonsHome(orderedPokemons)
	// 	setImageContainer('')
	// }

	const CleanPokedex = () => {
		
		setters.setPokedex([])
		goToHomePage(navigate)
		document.location.reload(true);
		
		
	}
	
	const onClickImage = (pokemon, props) => {
		setImageContainer(
			<CartPokedex>
				<img src={props.Poke.sprites.front_default} alt={props.Poke.name} />
				<Buttons>
					<a onClick={() => func.removeFromPokedex(pokemon)}><img src={remover} alt="Remover" /> alert(adicionado)</a>
					<a onClick={() => goToDetails(navigate, props.pokemon.name)}><img src={detalhes} alt="Detalhes"/></a> 
				</Buttons>
			</CartPokedex>
		)
	}


	return (
		<GlobalStateContext.Provider value={{image , setImage}}>
			<PokedexPageContainer>
				<HeaderContainer>
					<img src={pokedex} alt='Pokédex'/>

					<a onClick={CleanPokedex}><img src={limpar} alt='Limpar Tela'/></a>

					<a onClick={() => goToPage(navigate, "/")}><img src={voltar} alt='Voltar'/></a>

					<NumContainer>
						<img src={pokeballIcon} />
						<p>{states.pokedex.length}</p>
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