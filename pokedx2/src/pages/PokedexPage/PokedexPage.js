import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { goToDetails, goToPage } from '../../routes/coordinator';
import { HeaderContainer, PokedexPageContainer, NumContainer, MainContainer, PokemonContainer, ListPokedexContainer, ListContainer, DetailContainerList, Buttons, CartPokedex} from "./style";
import { GlobalStateContext } from "../../context/GlobalStateContext";
import pokeballWhiteIcon from "../../imgs/pokeballWhite-icon.png";
import { getPokemons } from "../../services/requests";
import remover from "../../imgs/Remover-da-Pokedex.png";
import detalhes from "../../imgs/Detalhes.png";
import limpar from "../../imgs/Limpar-Pokedex.png";
import pokedex from "../../imgs/Pokedex.png";
import pokeballIcon from "../../imgs/pokeball-icon.png"
import voltar from "../../imgs/Voltar.png"


function PokedexPage() {
  const [image , setImage] = useState("")

  const { states, setters } = useContext(GlobalStateContext)
  const { pokemonDetails, pokemons, pokemonsHome } = states
  const { setPokemons, setPokemonDetails, setPokemonPokedex , setPokemonsHome } = setters
  const [ imageContainer, setImageContainer ] = useState('')
  const navigate = useNavigate()


const renderPokemonsList = pokemons && pokemons.map((pokemon, props) => {
      return (
          <ListPokedexContainer key={props.pokemon.name}>
              <DetailContainerList onClick={() => onClickImage(pokemon)}>
                  <img src={props.Poke.sprites.versions["generation-viii"].icons.front_default} alt="pokemons"/>
                  <p>{props.pokemon.name}</p>
                  <img src={pokeballWhiteIcon}/>
              </DetailContainerList>
          </ListPokedexContainer>
      )
  })

  const removeFromPokedex = (pokemon) => {
      const newPokemonsPokedex = [...pokemons]
      const index = pokemons.findIndex(
          (item) => item.name === pokemon.name
      );

      newPokemonsPokedex.splice(index, 1)
      setPokemonPokedex(newPokemonsPokedex)

      const newPokemons = [...pokemonsHome, pokemon];
      const orderedPokemons = newPokemons.sort((a, b) => {
          return a.id - b.id;
      })
      setPokemonsHome(orderedPokemons)
      setImageContainer('')
  }

  const CleanPokedex = () => {
      setPokemonPokedex([])
      getPokemons(setPokemons)
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
                  <img src={pokedex} alt='Pokédex'/>
                  <a onClick={CleanPokedex}><img src={limpar} alt='Limpar Tela'/></a>
                  <a onClick={() => goToPage(navigate, "/")}><img src={voltar} alt='Voltar'/></a>
                  <NumContainer>
                      <img src={pokeballIcon} />
                      <p>{pokemons.length}</p>
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