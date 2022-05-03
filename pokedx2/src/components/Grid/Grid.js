import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getAllPokemons } from '../../constants/Api'

import PokeCard from '../PokeCard/PokeCard'

const ContainerGrid = styled.div`
	border: dotted black 1px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 200px);
	justify-content: center;
	grid-gap: 15px;
	padding: 10px;
`

const Grid = () => {
	const [pokemons,setPokemons] = useState({});

	useEffect(()=>{
		setPokemons(getAllPokemons(setPokemons,30,0))
		console.log(pokemons);
		
	},[])

	// const pokemon = pokemons.results.map((poke) => {
	// 	if (poke === undefined){
	// 		return;
	// 	}
	// 	return(
	// 		<>
	// 			<PokeCard />
	// 		</>
	// 	)
	// })
	

		return (
			<>
				<ContainerGrid >
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				<PokeCard />
				</ContainerGrid>

			</>
		)
	}

export default Grid