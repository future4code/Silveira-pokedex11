import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";
import Grid from "../../components/Grid/Grid";
import { HomeContainer } from "./style";
import { getAllPokemons } from "../../constants/Api";
import { url } from "../../constants/url";


const ContainerGrid = styled.div`
	border: dotted black 1px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 200px);
	justify-content: center;
	grid-gap: 15px;
	padding: 10px;
`

export default function HomePage() {
	const [pokemons,setPokemons] = useState([]);
	const [pokeInform,setPokeInform] = useState([]);
	
	useEffect(()=>{
		getAllPokemons(setPokemons,30,0)
		console.log('-----');
		console.log(pokemons);
	},[])
	console.log(pokemons);
	

	useEffect(() => {
		const listnew = [];
		pokemons && pokemons.forEach((poke)=>{
			//colocar o da api
			axios.get(`${url}/${poke.name}`)
			.then((res)=>{
				listnew.push(res.data)
				console.log(listnew);
				if (listnew.length === 30) {
					setPokeInform(listnew)
				}
				// console.log(res.data.sprites.front_default);
				
			}).catch((err) =>{

				console.log(err);

			})
		})
	},[pokemons])
 

	
	const list = pokeInform && pokeInform.map((poke) => {
		return(
			<PokeCard key={poke.id}
			img={poke.sprites.front_default}
				// name={poke.name}
			/>
		)
	})

	return ( 
		<HomeContainer>
			<Header />
			{/* <Grid
				Pokemons={pokemons.length === 30 ? pokemons : 'deu erro msm'}
			> */}
				{/* {pokemon} */}
			{/* 
			 */}
			 
				<ContainerGrid>
					{list}
				</ContainerGrid>

		</HomeContainer>

	)
}

	
	// const pokemon = () => {
	// 	setPokemons(getAllPokemons(setPokemons,30,0))
	// 	console.log(pokemons.results);
	// 	return(
	// 		<PokeCard />
	// 	)
	// }