import React, { useEffect} from "react";
import axios from "axios";
import PokeCard from "../../components/PokeCard/PokeCard";
import Header from "../Header/Header";
import { useGlobal } from "../../context/GlobalStateContext";
import { HomeContainer, ContainerGrid } from "./style";


export default function HomePage() {

	const {states,setters,requests,func} = useGlobal();
	

	useEffect(()=>{
		document.title = 'PokeDex'
		requests.getAllPokemons(setters.setPokemons,30,0 )
	},[])
	
	useEffect(() => {
		const listnew = [];
		states.pokemons && states.pokemons.forEach((poke)=>{
			axios.get(`${func.url}/${poke.name}`)
			.then((res)=>{
				listnew.push(res.data)
				if (listnew.length === 30) {
					setters.setPokeInform(listnew)
				}
			}).catch((err) =>{
				console.log(err);
			})
		})
	},[states.pokemons])

	const list = states.pokeInform && states.pokeInform.map((poke) => {
		return(
			<PokeCard 
				Poke={poke}
			/>
		)
	})

	return ( 
    <HomeContainer>
			<Header />

			<ContainerGrid>	
				{list}
			</ContainerGrid>

		</HomeContainer>
	)
}
