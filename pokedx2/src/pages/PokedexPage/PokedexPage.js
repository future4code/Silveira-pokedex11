import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetails, goToPage,goToHomePage } from '../../routes/coordinator';
import { GlobalStateContext } from "../../context/GlobalStateContext";
import { useGlobal } from '../../context/GlobalStateContext';
import pokeballWhiteIcon from "../../imgs/pokeballWhite-icon.png";
import remover from "../../imgs/remover-pokedex.png";
import limpar from "../../imgs/Limpar-Pokedex.png";
import pokedex from "../../imgs/Pokedex.png";
import pokeballIcon from "../../imgs/pokeball-icon.png"
import voltar from "../../imgs/Voltar.png"
import { HeaderContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, Buttons, CartPokedex, ImagePoke} from "./style";

function PokedexPage() {
	const [image , setImage] = useState("")
	const {states,setters,func} = useGlobal()
	const [ imageContainer, setImageContainer ] = useState('')
	const navigate = useNavigate()

	const renderPokemonsList = states.pokedex && states.pokedex.sort((a, b) => a.id - b.id).map((pokemon, index) => {

		return (
			<ListPokedexContainer key={index}>
				<h3>{pokemon.name.toUpperCase()}</h3>
				{pokemon.sprites ? (
					<ImagePoke src={pokemon.sprites.front_default} alt={pokemon.name}/>
				) : (
					null
				)
			}
					<img src={pokeballWhiteIcon}/>
					<Buttons onClick={() => { func.removeFromPokedex(pokemon) }}><img src={remover} /></Buttons>
			</ListPokedexContainer>
		)
	})

	const CleanPokedex = () => {
		setters.setPokedex([])
		goToHomePage(navigate)
		document.location.reload(true);
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
						<p>{states.pokedex?.length}</p>
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