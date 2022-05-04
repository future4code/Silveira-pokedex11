import axios from 'axios'

import React, {useState, useEffect} from 'react'
import { GlobalStateContext } from './GlobalStateContext'

const GlobalState = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [pokedex, setPokedex] = useState([])

  // colocar a requisição de api aqui e setar o estado global pokemons com a lista vinda da api...

  const states = {pokemons, pokedex}
  const setters = {setPokemons, setPokedex}


  return (
    <GlobalStateContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState