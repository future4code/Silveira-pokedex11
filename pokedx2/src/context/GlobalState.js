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
	const [categories, setCategories] = useState([])
	const [currentCategory, setCurrentCategory] = useState('all')
	const {pokedex, setPokedex} = useState(GlobalStateContext);
	
	const getAllPokemons = async ( setPokemons,limit,comeco  ) => {//pegar a lista de pokemons da API
		try {
			let diferenca = limit - comeco;
			if (limit>comeco && diferenca >= 20){
				
				const response = await axios.get(`${url}?limit=${limit}&offset=${comeco}`)
				setPokemons( response.data.results) 
				
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
			console.log('deu certo o getPokemonDetail');
			console.log(response);

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



	const states = {pokemons, pokedex}
	const setters = {setPokemons, setPokedex}
	const requests = {getAllPokemons,getPokemonsDetail,getPokemonsTypes}


	return (
			<GlobalStateContext.Provider value={{states, setters,requests}}>
				{props.children}
			</GlobalStateContext.Provider>
		)
	}