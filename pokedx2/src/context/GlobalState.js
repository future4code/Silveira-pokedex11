
import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, {useState, useEffect, useContext} from 'react'
import PokeCard from "../components/PokeCard/PokeCard";
import { getPokemonsTypes } from '../services/requests';
import { getAllPokemons } from "../constants/Api";
import { url } from "../constants/url";

export default function GlobalState(props) {
	
	const [pokemons,setPokemons] = useState([]);
	const [pokeInform,setPokeInform] = useState([]);
	const [categories,setCategories] = useState([])
	const [pokeInfo,setPokeInfo] = useState({})
	const [currentCategory,setCurrentCategory] = useState('all')
	const {pokedex,setPokedex} = useState(GlobalStateContext);
	
	const getAllPokemons = async ( setPokemons,limit,começo  ) => {//pegar a lista de pokemons da API
		try {

			let diferenca = limit - começo;

			if (limit > começo && diferenca >= 20){
				const response = await axios.get(`${url}?limit=${limit}&offset=${começo}`)
				setPokemons( response.data.results) 
				// console.log('===')
				// console.log('deu certo o getAll')
				// console.log(response.data.results);
				// console.log('===')
			} else{
				return 'erro';
			}
			
		} catch (err) {
			console.log('deu erro no getAllPokemons');
			console.log(err.message);
		}

	}

		
	const getPokemonsDetail = async (idDoPokemon,setPokeInfo) => {
		try {
			
			const response = await axios.get(`${url}/${idDoPokemon}`)
			// console.log('deu certo o getPokemonDetail');
			console.log(response.data);
			setPokeInfo(response.data)

		} catch (err) {
			console.log('deu erro no getPokemonsDetail');
			console.log(err.message);
		}
	}

	const getPokemonsTypes = (set) => {
		axios
		.get(`https://pokeapi.co/api/v2/type`)
			.then((res) => {
				set(res.data.results)
			})
			.catch((err) => {
				console.log(err)
			})
	}



	const states = {pokemons,pokedex,pokeInform,categories,currentCategory,pokeInfo}
//						\		  \          \       `````---___      ````---___ ````----______  
	const setters = {setPokemons,setPokedex,setPokeInform,setCategories,setCurrentCategory,setPokeInfo}

	const requests = {getAllPokemons,getPokemonsDetail,getPokemonsTypes}


	return (
			<GlobalStateContext.Provider value={{states,setters,requests}}>
				{props.children}
			</GlobalStateContext.Provider>
		)
	}