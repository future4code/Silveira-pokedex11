import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import PokeCard from "../../components/PokeCard/PokeCard";
import Grid from "../../components/Grid/Grid";
import { HomeContainer } from "./style";
import { getAllPokemons } from "../../constants/Api";

export default function HomePage() {
	const [pokemons,setPokemons] = useState({});
	
	// useEffect(()=>{
	// 	getAllPokemons(setPokemons,30,0)
	// 	console.log('-----');
	// 	console.log(pokemons);
	// },[])
		
	const pokemon = () => {
		setPokemons(getAllPokemons(setPokemons,30,0))
		console.log(pokemons.results);
		return(
			<PokeCard />
		)
	}
 
	return ( 
		<HomeContainer>
			<Header />
			<Grid>
				{pokemon}
			</Grid>
		</HomeContainer>

	)
}

