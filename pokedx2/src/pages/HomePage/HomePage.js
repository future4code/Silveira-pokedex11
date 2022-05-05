
import React, { useEffect, useState, useContext } from "react";

import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";
import Header from "../Header/Header";

import { GlobalStateContext } from "../../context/GlobalStateContext";
import { HomeContainer, SelectCategory, ContainerGrid } from "./style";

import { url } from "../../constants/url";

  const HomePage = () => {
	
	// const [pokemons,setPokemons] = useState([]);
	// const [pokeInform,setPokeInform] = useState([]);
	// const [categories, setCategories] = useState([])
  // const [currentCategory, setCurrentCategory] = useState('all')

  const { states, setters, requests } = useContext(GlobalStateContext)

	useEffect(() => {
        // getPokemonsTypes(setCategories)
		requests.getPokemonsTypes(setters.setCategories)
    }, [])

	
	useEffect(()=>{
		// getAllPokemons(setPokemons,30,0)
		requests.getAllPokemons(setters.setPokemons,30,0 )
		console.log(states.pokemons)
	},[])

	

	useEffect(() => {
		const listnew = [];
		states.pokemons && states.pokemons.forEach((poke)=>{
			//colocar o da api
			axios.get(`${url}/${poke.name}`)
			.then((res)=>{
				listnew.push(res.data)
				// console.log('=====listnew =====');
				// console.log(listnew);
				// console.log('=====listnew =====');
				if (listnew.length === 30) {
					setters.setPokeInform(listnew)
					if (states.pokeInform.length != 0 ) {
						console.log(states.pokeInform.length);
						console.log(states.pokeInform);
						console.log('------');
					} 
					
				}
				// console.log(res.data.sprites.front_default);
			
			}).catch((err) =>{
				console.log(err);
			})
		})
	},[states.pokemons])

//	useEffect(() => {
//		const listnew = [];
//		states.pokemons && states.pokemons.forEach((poke)=>{
//			//colocar o da api
//			axios.get(`${url}/${poke.name}`)
//			.then((res)=>{
//				listnew.push(res.data)
//				// console.log('=====listnew =====');
//				// console.log(listnew);
//				// console.log('=====listnew =====');
//				if (listnew.length === 30) {
//					setters.setPokeInform(listnew)
//					// if (states.pokeInform.length != 0 ) {
//					// 	console.log(states.pokeInform.length);
//						console.log(states.pokeInform);
//						console.log('------');
//					// } 
//					
//				}
//				// console.log(res.data.sprites.front_default);
//			
//			}).catch((err) =>{
//				console.log(err);
//			})
//		})
//	},[])


	
	const list = states.pokeInform && states.pokeInform.map((poke) => {
		return(
			<PokeCard
        Pokedex={false}
        key={poke.id}
				details={poke}
				
			/>
		)
	})

	const renderCategories = states.categories.map((categorie) => {
		return (
			<option key={categorie.name} value={categorie.name}>{categorie.name}</option>
		)
	})
  
	const handleCategories = e => {
		setters.setCurrentCategory(e.target.value)
	}

	return ( 
    <HomeContainer>
			<Header />
			<SelectCategory  onChange={handleCategories}>
                    <option value='all' defaultValue>Selecione um tipo de Pókemon</option>
                    {renderCategories}
                </SelectCategory>
				<ContainerGrid>
					{list}
				</ContainerGrid>
		</HomeContainer>
	)
}

export default HomePage;