import React, { useEffect, useState, useContext } from "react";

import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";
import Header from "../Header/Header";

import { useGlobal } from "../../context/GlobalStateContext";
import { HomeContainer, SelectCategory, ContainerGrid } from "./style";


export default function HomePage() {

	const url = "https://pokeapi.co/api/v2/pokemon"

	const {states,setters,requests} = useGlobal()
	
	useEffect(() => {
 
		requests.getPokemonsTypes(setters.setCategories)
    }, [])

	
	useEffect(()=>{

		requests.getAllPokemons(setters.setPokemons,30,0 )

	},[])

	

	useEffect(() => {
		const listnew = [];
		states.pokemons && states.pokemons.forEach((poke)=>{
			//colocar o da api
			axios.get(`${url}/${poke.name}`)
			
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
				// details={}
				key={poke.id}

				Poke={poke}
				
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
