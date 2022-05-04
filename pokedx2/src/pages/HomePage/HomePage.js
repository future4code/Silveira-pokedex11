import React, { useEffect, useState, useContext } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import axios from "axios";
import PokeCard from "../../components/PokeCard/PokeCard";
import { HomeContainer, SelectCategory, ContainerGrid } from "./style";
import { getPokemonsTypes } from '../../services/requests';
import { getAllPokemons } from "../../constants/Api";
import { url } from "../../constants/url";
import { GlobalStateContext } from "../../global/GlobalStateContext";


export default function HomePage() {

	
	const [pokemons,setPokemons] = useContext(GlobalStateContext);
	const [pokeInform,setPokeInform] = useState([]);
	const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('all')

	useEffect(() => {
        getPokemonsTypes(setCategories)
    }, [])

	
	useEffect(()=>{
		getAllPokemons(setPokemons,30,0)
		console.log('-----');
		console.log(pokemons);
	},[])
	console.log('========');
	console.log('state pokemons');
	console.log(pokemons);
	console.log('-------');
	

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

				{/* <Grid
				Pokemons={pokemons.length === 30 ? pokemons : 'deu erro msm'}
			> */}
				{/* {pokemon} */}
			{/* 
			 */}
	// const pokemon = () => {
	// 	setPokemons(getAllPokemons(setPokemons,30,0))
	// 	console.log(pokemons.results);
	// 	return(
	// 		<PokeCard />
	// 	)
	// }