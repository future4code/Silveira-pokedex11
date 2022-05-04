import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, {useState, useEffect} from 'react'
export default function GlobalState(props) {
	const [pokemonList, setPokemonList] = useState([]);//estado para a lista de pokemons
	const [pokemons, setPokemons] = useState([])
	const [pokedex, setPokedex] = useState([])

	const getPokemonList = () => {//pegar a lista de pokemons da API
		axios
			.get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
			.then((response) => {
				setPokemonList(response.data.results);
			})
			.catch((error) => console.log(error.message));
	};

	useEffect(() => {
	getPokemonList();
	}, []);

	useEffect(() => {
	const newList = [];
	pokemonList.forEach((item) => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
			.then((response) => {
				newList.push(response.data);
				if (newList.length === 30) {
					const orderedList = newList.sort((a, b) => {
						return a.id - b.id;
					});
					setPokemons(orderedList);
				}
			})
			.catch((error) => console.log(error.message));
	});
	}, [pokemonList]);


	const states = {pokemons, pokedex}
	const setters = {setPokemons, setPokedex}

	return (
		<GlobalStateContext.Provider value={{states, setters}}>
		{props.children}
		</GlobalStateContext.Provider>
	)
	}

