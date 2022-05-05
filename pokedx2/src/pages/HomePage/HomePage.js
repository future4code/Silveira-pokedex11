import React, { useEffect, useState, useContext } from "react";

// import styled from "styled-components";
import axios from "axios";

import PokeCard from "../../components/PokeCard/PokeCard";
import Header from "../Header/Header";

import { useGlobal } from "../../context/GlobalStateContext";
import { HomeContainer, SelectCategory, ContainerGrid } from "./style";
import { getPokemonsTypes, getAllPokemons } from '../../services/requests';
// import { getAllPokemons } from "../../constants/Api";
import { url } from "../../constants/url";


export default function HomePage() {
	
	const [pokemons,setPokemons] = useState([]);
	const [pokeInform,setPokeInform] = useState([]);
	const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('all')

	const {states, setters} = useGlobal()

	useEffect(() => {
        getPokemonsTypes(setCategories)
    }, [])

	
	useEffect(()=>{
		getAllPokemons(setPokemons,30,0)

	},[])

	

	useEffect(() => {
		const listnew = [];
		pokemons && pokemons.forEach((poke)=>{
			//colocar o da api
			axios.get(`${url}/${poke.name}`)
			.then((res)=>{
				listnew.push(res.data)
				// console.log('=====listnew =====');
				// console.log(listnew);
				// console.log('=====listnew =====');
				if (listnew.length === 30) {
					setPokeInform(listnew)
					for(let i=0;i===2;i++){
						
					console.log('=======');
					console.log(pokeInform);
					console.log('=======');
					}
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
				Poke={poke}
				
			/>
		)
	})

	const renderCategories = categories.map((categorie) => {
		return (
			<option key={categorie.name} value={categorie.name}>{categorie.name}</option>
		)
	})
  
	const handleCategories = (e) => {
		setCurrentCategory(e.target.value)
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
