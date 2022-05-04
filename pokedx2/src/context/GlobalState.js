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


  const getPokemonList = () => {//pegar a lista de pokemons da API
    axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`)
        .then((response) => {
            list(response.data.results);
        })
        .catch((error) => console.log(error.message));
};

useEffect(() => {
  getPokemonList();
}, []);

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


  const states = {pokemons, pokedex}
  const setters = {setPokemons, setPokedex}

  return (
    <GlobalStateContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}