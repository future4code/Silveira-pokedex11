import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, {useState, useEffect, useContext} from 'react'



// import { url } from "../constants/url";

export default function GlobalState(props) {
	
	const [pokemons,setPokemons] = useState([]);
	const [pokeInform,setPokeInform] = useState([]);
	const [categories,setCategories] = useState([])
	const [pokeInfo,setPokeInfo] = useState({})
	const [currentCategory,setCurrentCategory] = useState('all')

	const [pokedex,setPokedex] = useState();


	const url = "https://pokeapi.co/api/v2/pokemon"

	const getAllPokemons = async ( setPokemons,limit,começo  ) => {//pegar a lista de pokemons da API
		try {

			let diferenca = limit - começo;

			if (limit > começo && diferenca >= 20){

				const response = await axios.get(`${url}?limit=${limit}&offset=${começo}`)
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
			// console.log('deu certo o getPokemonDetail');
			// console.log(response.data);
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

	
	const addToPokedex = poke => {
		const IndexPokemon = states.pokeInform.findIndex((value) => {
			// console.log("IndexPokemon");
			return value.name === poke.name
		
		})
		const novaListaPokemons = [...states.pokeInform]

		novaListaPokemons.splice(IndexPokemon, 1)

		if (states.pokedex === undefined ){

			const novaListaPokedex = [ poke ]
			setters.setPokedex(novaListaPokedex)
			setters.setPokeInform(novaListaPokemons)


		} else {

			const novaListaPokedex = [...states.pokedex, poke]
			setters.setPokedex(novaListaPokedex)
			setters.setPokeInform(novaListaPokemons)

		}
		
	}

	const removeFromPokedex = poke => {
		const IndexPokemon = states.pokedex.findIndex((value) => {
			return value.name === poke.name
		})

		const novaListaPokedex = [...states.pokedex]
		novaListaPokedex.splice(IndexPokemon, 1)

		const novaListPokemons = [...states.pokeInform,poke]

		setters.setPokedex(novaListaPokedex)
		setters.setPokeInform(novaListPokemons)
	}

	const CleanPokedex = () => {
		setters.setPokedex([])
		requests.getPokemons(setters.setPokemons)
		
	}

	const states = {    pokemons,   pokedex,   pokeInform,   categories,   currentCategory,   pokeInfo}

	const setters = {setPokemons,setPokedex,setPokeInform,setCategories,setCurrentCategory,setPokeInfo}

	const requests = {getAllPokemons,getPokemonsDetail,getPokemonsTypes}

	const func = {addToPokedex, removeFromPokedex, CleanPokedex}

	return (
			<GlobalStateContext.Provider value={{states,setters,requests,func}}>
				{props.children}
			</GlobalStateContext.Provider>
		)
	}