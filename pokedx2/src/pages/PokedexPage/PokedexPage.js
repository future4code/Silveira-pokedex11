import React, { useContext } from 'react'
import PokeCard from '../../components/PokeCard/PokeCard'
import { GlobalStateContext } from '../../context/GlobalStateContext'
import Header from './Header/Header'

const PokedexPage = () => {

  const {states} = useContext(GlobalStateContext)

  const listaPokedex = states.pokedex && states.pokedex.map((value) => {
    return <PokeCard Pokedex={true} key={value.name} details={value} />
  })

  return (
    <div>
      <Header />
      {listaPokedex}
    </div>
  )
}

export default PokedexPage